import { afterEach, beforeEach, describe, expect, it, vi } from "../_internals/test/runtime";
import {
	GetCepInfoByAddressError,
	GetCepInfoByAddressNotFoundError,
	GetCepInfoByAddressValidationError,
	getCepInfoByAddress,
} from "./get-cep-info-by-address";

describe("getCepInfoByAddress", () => {
	const fetchMock = vi.fn();
	const originalFetch = globalThis.fetch;

	beforeEach(() => {
		globalThis.fetch = fetchMock as typeof fetch;
		fetchMock.mockClear();
	});

	afterEach(() => {
		globalThis.fetch = originalFetch;
		vi.restoreAllMocks();
	});

	it("should validate UF before fetching", async () => {
		await expect(
			getCepInfoByAddress({
				federalUnit: "XX",
				city: "São Paulo",
				street: "Avenida Paulista",
			}),
		).rejects.toThrow(GetCepInfoByAddressValidationError);
	});

	it("should throw GetCepInfoByAddressValidationError for an empty city", async () => {
		await expect(
			getCepInfoByAddress({
				federalUnit: "SP",
				city: "",
				street: "Avenida Paulista",
			}),
		).rejects.toThrow(GetCepInfoByAddressValidationError);
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it("should throw GetCepInfoByAddressValidationError for an empty street", async () => {
		await expect(
			getCepInfoByAddress({
				federalUnit: "SP",
				city: "São Paulo",
				street: "",
			}),
		).rejects.toThrow(GetCepInfoByAddressValidationError);
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it("should throw GetCepInfoByAddressError when the response is not ok", async () => {
		fetchMock.mockResolvedValueOnce({
			json: async () => ({}),
			ok: false,
			status: 500,
		});

		await expect(
			getCepInfoByAddress({
				federalUnit: "SP",
				city: "São Paulo",
				street: "Avenida Paulista",
			}),
		).rejects.toThrow(GetCepInfoByAddressError);
	});

	it("should throw GetCepInfoByAddressNotFoundError when ViaCEP returns an empty array", async () => {
		fetchMock.mockResolvedValueOnce({
			json: async () => [],
			ok: true,
		});

		await expect(
			getCepInfoByAddress({
				federalUnit: "SP",
				city: "Cidade Inexistente",
				street: "Rua Inexistente",
			}),
		).rejects.toThrow(GetCepInfoByAddressNotFoundError);
	});

	it("should return addresses from ViaCEP", async () => {
		fetchMock.mockResolvedValueOnce({
			ok: true,
			json: async () => [
				{
					bairro: "Bela Vista",
					cep: "01310-100",
					localidade: "São Paulo",
					logradouro: "Avenida Paulista",
					uf: "SP",
				},
			],
		});

		await expect(
			getCepInfoByAddress({
				federalUnit: "SP",
				city: "São Paulo",
				street: "Avenida Paulista",
			}),
		).resolves.toEqual([
			{
				bairro: "Bela Vista",
				cep: "01310-100",
				localidade: "São Paulo",
				logradouro: "Avenida Paulista",
				uf: "SP",
			},
		]);
	});

	it("should retry and then propagate transport failures unwrapped", async () => {
		fetchMock.mockRejectedValueOnce(
			Object.assign(new TypeError("fetch failed"), {
				cause: { code: "UND_ERR_SOCKET" },
			}),
		);
		fetchMock.mockRejectedValueOnce(
			Object.assign(new TypeError("fetch failed"), {
				cause: { code: "UND_ERR_SOCKET" },
			}),
		);
		fetchMock.mockRejectedValueOnce(
			Object.assign(new TypeError("fetch failed"), {
				cause: { code: "UND_ERR_SOCKET" },
			}),
		);

		await expect(
			getCepInfoByAddress({
				federalUnit: "SP",
				city: "São Paulo",
				street: "Avenida Paulista",
			}),
		).rejects.toThrow(TypeError);
		expect(fetchMock).toHaveBeenCalledTimes(3);
	});
});
