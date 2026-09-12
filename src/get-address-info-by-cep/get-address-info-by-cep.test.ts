import { afterEach, beforeEach, describe, expect, it, vi } from "../_internals/test/runtime";
import {
	GetAddressInfoByCepNotFoundError,
	GetAddressInfoByCepServiceError,
	GetAddressInfoByCepValidationError,
	getAddressInfoByCep,
} from "./get-address-info-by-cep";

type MockResponse = {
	ok: boolean;
	status?: number;
	json: () => Promise<unknown>;
};

const VALID_CEP = "01310100";
const VALID_CEP_MASKED = "01310-100";
const LIVE_TEST_TIMEOUT = 15000;

const viacepPayload = {
	bairro: "Bela Vista",
	cep: "01310-100",
	localidade: "São Paulo",
	logradouro: "Avenida Paulista",
	uf: "SP",
};

const widenetPayload = {
	address: "Avenida Paulista",
	city: "São Paulo",
	code: "01310-100",
	district: "Bela Vista",
	ok: true,
	state: "SP",
	status: 200,
};

const brasilApiPayload = {
	cep: VALID_CEP,
	city: "São Paulo",
	neighborhood: "Bela Vista",
	state: "SP",
	street: "Avenida Paulista",
};

function createJsonResponse(payload: unknown, status = 200): MockResponse {
	return {
		json: async () => payload,
		ok: status >= 200 && status < 300,
		status,
	};
}

function setupFetchMock(
	fetchMock: ReturnType<typeof vi.fn>,
	overrides?: Partial<Record<"brasilapi" | "viacep" | "widenet", Error | MockResponse>>,
) {
	fetchMock.mockImplementation(async (input: string | URL | Request) => {
		const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;

		if (url.includes("viacep.com.br")) {
			if (overrides?.viacep instanceof Error) {
				throw overrides.viacep;
			}

			return overrides?.viacep ?? createJsonResponse(viacepPayload);
		}

		if (url.includes("apps.widenet.com.br")) {
			if (overrides?.widenet instanceof Error) {
				throw overrides.widenet;
			}

			return overrides?.widenet ?? createJsonResponse(widenetPayload);
		}

		if (url.includes("brasilapi.com.br")) {
			if (overrides?.brasilapi instanceof Error) {
				throw overrides.brasilapi;
			}

			return overrides?.brasilapi ?? createJsonResponse(brasilApiPayload);
		}

		throw new Error(`Unexpected URL: ${url}`);
	});
}

const globalWithLiveFlag = globalThis as typeof globalThis & {
	RUN_LIVE_CEP_TESTS?: string | number;
};

function shouldRunLiveCepTests() {
	if (
		globalWithLiveFlag.RUN_LIVE_CEP_TESTS === "1" ||
		globalWithLiveFlag.RUN_LIVE_CEP_TESTS === 1
	) {
		return true;
	}

	try {
		if (typeof Deno !== "undefined") {
			return Deno.env.get("RUN_LIVE_CEP_TESTS") === "1";
		}
	} catch {}

	try {
		const maybeProcess = (
			globalThis as typeof globalThis & {
				process?: {
					env?: Record<string, string | undefined>;
				};
			}
		).process;

		if (maybeProcess?.env?.RUN_LIVE_CEP_TESTS === "1") {
			return true;
		}
	} catch {}

	return false;
}

const RUN_LIVE_CEP_TESTS = shouldRunLiveCepTests();

describe("getAddressInfoByCep", () => {
	describe("deterministic behavior", () => {
		const fetchMock = vi.fn();
		const originalFetch = globalThis.fetch;

		beforeEach(() => {
			globalThis.fetch = fetchMock as typeof fetch;
			fetchMock.mockClear();
			setupFetchMock(fetchMock);
		});

		afterEach(() => {
			globalThis.fetch = originalFetch;
			vi.restoreAllMocks();
		});

		describe("validation", () => {
			it("should throw GetAddressInfoByCepValidationError for invalid CEP format", async () => {
				await expect(getAddressInfoByCep("12345")).rejects.toThrow(
					GetAddressInfoByCepValidationError,
				);
				await expect(getAddressInfoByCep("123456789")).rejects.toThrow(
					GetAddressInfoByCepValidationError,
				);
				await expect(getAddressInfoByCep("")).rejects.toThrow(GetAddressInfoByCepValidationError);
			});

			it("should throw GetAddressInfoByCepValidationError for empty providers array", async () => {
				await expect(getAddressInfoByCep(VALID_CEP, { providers: [] })).rejects.toThrow(
					GetAddressInfoByCepValidationError,
				);
			});

			it("should accept valid CEP as string", async () => {
				const result = await getAddressInfoByCep(VALID_CEP);

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
			});

			it("should accept valid CEP as number and pad with leading zeros", async () => {
				const result = await getAddressInfoByCep(1310100);

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
			});

			it("should accept CEP with mask", async () => {
				const result = await getAddressInfoByCep(VALID_CEP_MASKED);

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
			});
		});

		describe("provider selection", () => {
			it("should use the default providers (viacep, brasilapi) and skip the deprecated widenet provider", async () => {
				const result = await getAddressInfoByCep(VALID_CEP);

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");

				const requestedUrls = fetchMock.mock.calls.map(([input]: [string | URL | Request]) =>
					typeof input === "string" ? input : input instanceof URL ? input.href : input.url,
				);
				expect(requestedUrls.some((url: string) => url.includes("widenet"))).toBe(false);
			});

			it("should still allow widenet to be used when explicitly requested", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["widenet"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
			});

			it("should throw GetAddressInfoByCepValidationError for a providers array made only of inherited Object property names", async () => {
				await expect(
					getAddressInfoByCep(VALID_CEP, {
						// @ts-expect-error
						providers: ["constructor", "toString"],
					}),
				).rejects.toThrow(GetAddressInfoByCepValidationError);
			});

			it("should use only specified providers", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["brasilapi"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
			});

			it("should use multiple specified providers", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["viacep", "brasilapi"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
			});

			it("should filter out invalid provider names", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					// @ts-expect-error
					providers: ["viacep", "invalid", "brasilapi"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
			});
		});

		describe("response structure", () => {
			it("should return normalized address information from ViaCEP", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["viacep"],
				});

				expect(result).toBeDefined();
				expect(result).toHaveProperty("cep");
				expect(result).toHaveProperty("state");
				expect(result).toHaveProperty("city");
				expect(result).toHaveProperty("neighborhood");
				expect(result).toHaveProperty("street");
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBe("Bela Vista");
				expect(result.street).toBe("Avenida Paulista");
			});

			it("should return normalized address information from Widenet", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["widenet"],
				});

				expect(result).toBeDefined();
				expect(result).toHaveProperty("cep");
				expect(result).toHaveProperty("state");
				expect(result).toHaveProperty("city");
				expect(result).toHaveProperty("neighborhood");
				expect(result).toHaveProperty("street");
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBe("Bela Vista");
				expect(result.street).toBe("Avenida Paulista");
			});

			it("should return normalized address information from BrasilAPI", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["brasilapi"],
				});

				expect(result).toBeDefined();
				expect(result).toHaveProperty("cep");
				expect(result).toHaveProperty("state");
				expect(result).toHaveProperty("city");
				expect(result).toHaveProperty("neighborhood");
				expect(result).toHaveProperty("street");
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBe("Bela Vista");
				expect(result.street).toBe("Avenida Paulista");
			});
		});

		describe("error handling", () => {
			it("should throw GetAddressInfoByCepNotFoundError when ViaCEP returns erro", async () => {
				setupFetchMock(fetchMock, {
					viacep: createJsonResponse({
						erro: true,
					}),
				});

				await expect(getAddressInfoByCep("00000000", { providers: ["viacep"] })).rejects.toThrow(
					GetAddressInfoByCepNotFoundError,
				);
			});

			it("should throw GetAddressInfoByCepNotFoundError when Widenet returns invalid status", async () => {
				setupFetchMock(fetchMock, {
					widenet: createJsonResponse({
						ok: false,
						status: 404,
					}),
				});

				await expect(getAddressInfoByCep("00000000", { providers: ["widenet"] })).rejects.toThrow(
					GetAddressInfoByCepNotFoundError,
				);
			});

			it("should throw GetAddressInfoByCepServiceError when Widenet's HTTP request itself fails", async () => {
				setupFetchMock(fetchMock, {
					widenet: createJsonResponse({}, 503),
				});

				await expect(getAddressInfoByCep(VALID_CEP, { providers: ["widenet"] })).rejects.toThrow(
					GetAddressInfoByCepServiceError,
				);
			});

			it("should throw GetAddressInfoByCepNotFoundError when BrasilAPI returns errors", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: createJsonResponse({
						errors: [{ message: "CEP não encontrado" }],
					}),
				});

				await expect(getAddressInfoByCep("00000000", { providers: ["brasilapi"] })).rejects.toThrow(
					GetAddressInfoByCepNotFoundError,
				);
			});

			it("should throw GetAddressInfoByCepNotFoundError when all providers return not found", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: createJsonResponse({
						errors: [{ message: "CEP não encontrado" }],
					}),
					viacep: createJsonResponse({
						erro: true,
					}),
					widenet: createJsonResponse({
						ok: false,
						status: 404,
					}),
				});

				await expect(getAddressInfoByCep("00000000")).rejects.toThrow(
					GetAddressInfoByCepNotFoundError,
				);
			});

			it("should throw GetAddressInfoByCepServiceError when all providers fail with network errors", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: new Error("Connection failed"),
					viacep: new Error("Network error"),
					widenet: new Error("Timeout"),
				});

				await expect(getAddressInfoByCep(VALID_CEP)).rejects.toThrow(
					GetAddressInfoByCepServiceError,
				);
				await expect(getAddressInfoByCep(VALID_CEP)).rejects.toThrow(
					"Todos os serviços estão fora de serviço ou indisponíveis",
				);
			});

			it("should throw GetAddressInfoByCepServiceError when all providers return HTTP errors", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: createJsonResponse({}, 500),
					viacep: createJsonResponse({}, 500),
					widenet: createJsonResponse({}, 503),
				});

				await expect(getAddressInfoByCep(VALID_CEP)).rejects.toThrow(
					GetAddressInfoByCepServiceError,
				);
			});

			it("should return first successful response when some providers fail", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: createJsonResponse(brasilApiPayload),
					viacep: new Error("Network error"),
					widenet: createJsonResponse({}, 503),
				});

				const result = await getAddressInfoByCep(VALID_CEP);

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.city).toBe("São Paulo");
			});

			it("should prioritize GetAddressInfoByCepNotFoundError over GetAddressInfoByCepServiceError when mixed", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: createJsonResponse({
						errors: [{ message: "CEP não encontrado" }],
					}),
					viacep: createJsonResponse({
						erro: true,
					}),
					widenet: new Error("Network error"),
				});

				await expect(getAddressInfoByCep("00000000")).rejects.toThrow(
					GetAddressInfoByCepNotFoundError,
				);
			});

			it("should prioritize GetAddressInfoByCepNotFoundError when mixed across only 2 providers", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: new Error("Network error"),
					viacep: createJsonResponse({ erro: true }),
				});

				await expect(
					getAddressInfoByCep("00000000", { providers: ["viacep", "brasilapi"] }),
				).rejects.toThrow(GetAddressInfoByCepNotFoundError);
			});

			it("should throw GetAddressInfoByCepServiceError when 2 providers both fail with network errors", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: new Error("Network error"),
					viacep: new Error("Connection failed"),
				});

				await expect(
					getAddressInfoByCep(VALID_CEP, { providers: ["viacep", "brasilapi"] }),
				).rejects.toThrow(GetAddressInfoByCepServiceError);
			});
		});

		describe("missing optional fields default to empty string", () => {
			it("should default bairro/localidade/logradouro to empty string for ViaCEP", async () => {
				setupFetchMock(fetchMock, {
					viacep: createJsonResponse({ cep: "01310-100", uf: "SP" }),
				});

				const result = await getAddressInfoByCep(VALID_CEP, { providers: ["viacep"] });

				expect(result.neighborhood).toBe("");
				expect(result.city).toBe("");
				expect(result.street).toBe("");
			});

			it("should default uf to empty string for ViaCEP", async () => {
				setupFetchMock(fetchMock, {
					viacep: createJsonResponse({ cep: "01310-100" }),
				});

				const result = await getAddressInfoByCep(VALID_CEP, { providers: ["viacep"] });

				expect(result.state).toBe("");
			});

			it("should default district/city/address to empty string for Widenet", async () => {
				setupFetchMock(fetchMock, {
					widenet: createJsonResponse({ code: "01310-100", ok: true, status: 200 }),
				});

				const result = await getAddressInfoByCep(VALID_CEP, { providers: ["widenet"] });

				expect(result.neighborhood).toBe("");
				expect(result.city).toBe("");
				expect(result.street).toBe("");
				expect(result.state).toBe("");
			});

			it("should default neighborhood/city/street to empty string for BrasilAPI", async () => {
				setupFetchMock(fetchMock, {
					brasilapi: createJsonResponse({ cep: VALID_CEP }),
				});

				const result = await getAddressInfoByCep(VALID_CEP, { providers: ["brasilapi"] });

				expect(result.neighborhood).toBe("");
				expect(result.city).toBe("");
				expect(result.street).toBe("");
				expect(result.state).toBe("");
			});
		});

		describe("provider integration", () => {
			it("should fetch address from ViaCEP", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["viacep"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBeTruthy();
				expect(result.street).toBeTruthy();
			});

			it("should fetch address from Widenet", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["widenet"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBeTruthy();
				expect(result.street).toBeTruthy();
			});

			it("should fetch address from BrasilAPI", async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["brasilapi"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBeTruthy();
				expect(result.street).toBeTruthy();
			});

			it("should return first successful response from multiple providers", async () => {
				const result = await getAddressInfoByCep(VALID_CEP);

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
			});
		});
	});

	const liveDescribe = RUN_LIVE_CEP_TESTS ? describe : describe.skip;

	liveDescribe("live API integration", () => {
		it(
			"should fetch live address from ViaCEP",
			async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["viacep"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBeTruthy();
				expect(result.street).toBeTruthy();
			},
			LIVE_TEST_TIMEOUT,
		);

		it(
			"should fetch live address from Widenet",
			async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["widenet"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBeTruthy();
				expect(result.street).toBeTruthy();
			},
			LIVE_TEST_TIMEOUT,
		);

		it(
			"should fetch live address from BrasilAPI",
			async () => {
				const result = await getAddressInfoByCep(VALID_CEP, {
					providers: ["brasilapi"],
				});

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBeTruthy();
				expect(result.street).toBeTruthy();
			},
			LIVE_TEST_TIMEOUT,
		);

		it(
			"should fetch live address from the first successful provider",
			async () => {
				const result = await getAddressInfoByCep(VALID_CEP);

				expect(result).toBeDefined();
				expect(result.cep).toBe(VALID_CEP);
				expect(result.state).toBe("SP");
				expect(result.city).toBe("São Paulo");
				expect(result.neighborhood).toBeTruthy();
				expect(result.street).toBeTruthy();
			},
			LIVE_TEST_TIMEOUT,
		);
	});
});
