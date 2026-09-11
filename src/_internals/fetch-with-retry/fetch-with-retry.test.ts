import { afterEach, beforeEach, describe, expect, it, vi } from "../test/runtime";
import { fetchWithRetry } from "./fetch-with-retry";

describe("fetchWithRetry", () => {
	const originalFetch = globalThis.fetch;

	beforeEach(() => {
		vi.restoreAllMocks();
	});

	afterEach(() => {
		globalThis.fetch = originalFetch;
		vi.restoreAllMocks();
	});

	it("retries transient undici socket failures", async () => {
		const fetchMock = vi
			.fn()
			.mockRejectedValueOnce(
				Object.assign(new TypeError("fetch failed"), {
					cause: { code: "UND_ERR_SOCKET" },
				}),
			)
			.mockResolvedValueOnce({
				ok: true,
				status: 200,
			});

		globalThis.fetch = fetchMock;

		const response = await fetchWithRetry("https://example.com", { retries: 1, retryDelayMs: 0 });

		expect(response.ok).toBe(true);
		expect(fetchMock).toHaveBeenCalledTimes(2);
	});

	it("does not retry when the cause object has no code", async () => {
		const error = Object.assign(new TypeError("random failure"), { cause: {} });
		const fetchMock = vi.fn().mockRejectedValue(error);

		globalThis.fetch = fetchMock;

		await expect(
			fetchWithRetry("https://example.com", { retries: 3, retryDelayMs: 0 }),
		).rejects.toThrow(error);
		expect(fetchMock).toHaveBeenCalledTimes(1);
	});

	it("does not retry non-transient failures", async () => {
		const error = new Error("Invalid URL");
		const fetchMock = vi.fn().mockRejectedValue(error);

		globalThis.fetch = fetchMock;

		await expect(
			fetchWithRetry("https://example.com", { retries: 3, retryDelayMs: 0 }),
		).rejects.toThrow(error);
		expect(fetchMock).toHaveBeenCalledTimes(1);
	});

	it("retries when a top level error code is transient", async () => {
		const fetchMock = vi
			.fn()
			.mockRejectedValueOnce(Object.assign(new Error("boom"), { code: "ECONNRESET" }))
			.mockResolvedValueOnce({ ok: true, status: 200 });
		globalThis.fetch = fetchMock;

		await fetchWithRetry("https://example.com", { retryDelayMs: 0 });

		expect(fetchMock).toHaveBeenCalledTimes(2);
	});

	it("retries when the error message says fetch failed", async () => {
		const fetchMock = vi
			.fn()
			.mockRejectedValueOnce(new TypeError("fetch failed"))
			.mockResolvedValueOnce({ ok: true, status: 200 });
		globalThis.fetch = fetchMock;

		await fetchWithRetry("https://example.com", { retryDelayMs: 0 });

		expect(fetchMock).toHaveBeenCalledTimes(2);
	});

	it("does not retry non-error rejections", async () => {
		const fetchMock = vi.fn().mockRejectedValueOnce("fetch failed");
		globalThis.fetch = fetchMock;

		const rejection = await fetchWithRetry("https://example.com", { retryDelayMs: 0 }).then(
			() => undefined,
			(error: unknown) => error,
		);

		expect(rejection).toBe("fetch failed");
		expect(fetchMock).toHaveBeenCalledTimes(1);
	});

	it("throws without ever attempting the fetch when retries is negative", async () => {
		const fetchMock = vi.fn();
		globalThis.fetch = fetchMock;

		const rejection = await fetchWithRetry("https://example.com", { retries: -1 }).then(
			() => undefined,
			(error: unknown) => error,
		);

		expect(rejection).toBeUndefined();
		expect(fetchMock).toHaveBeenCalledTimes(0);
	});
});
