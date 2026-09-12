import { PROCESSO_JURIDICO_LENGTH } from "../_internals/constants/processo-juridico";
import { describe, expect, it } from "../_internals/test/runtime";
import { isValidProcessoJuridico } from "../is-valid-processo-juridico/is-valid-processo-juridico";
import { generateProcessoJuridico } from "./generate-processo-juridico";

const currentYear = new Date().getFullYear();

describe("generateProcessoJuridico", () => {
	it("should generate a valid processo juridico", () => {
		const value = generateProcessoJuridico();

		expect(value).not.toBe(null);
		expect((value as string).length).toBe(PROCESSO_JURIDICO_LENGTH);
		expect(isValidProcessoJuridico(value as string)).toBe(true);
	});

	it("should generate valid values on every round trip", () => {
		for (let i = 0; i < 200; i++) {
			const value = generateProcessoJuridico();

			expect(value).not.toBe(null);
			expect((value as string).length).toBe(PROCESSO_JURIDICO_LENGTH);
			expect(isValidProcessoJuridico(value as string)).toBe(true);
		}
	});

	it("should honor the year and court options", () => {
		const value = generateProcessoJuridico({ year: currentYear, court: 5 });

		expect(value).not.toBe(null);
		expect((value as string).substring(9, 13)).toBe(String(currentYear));
		expect((value as string).charAt(13)).toBe("5");
		expect(isValidProcessoJuridico(value as string)).toBe(true);
	});

	it("should return null for years before the current one", () => {
		expect(generateProcessoJuridico({ year: currentYear - 1 })).toBe(null);
	});

	it("should return null for years above 9999", () => {
		expect(generateProcessoJuridico({ year: 10_000 })).toBe(null);
		expect(generateProcessoJuridico({ year: 99_999 })).toBe(null);
	});

	it("should accept the maximum supported year", () => {
		const value = generateProcessoJuridico({ year: 9999 });

		expect(value).not.toBe(null);
		expect((value as string).length).toBe(PROCESSO_JURIDICO_LENGTH);
		expect(isValidProcessoJuridico(value as string)).toBe(true);
	});

	it("should return null for invalid courts", () => {
		expect(generateProcessoJuridico({ court: 0 })).toBe(null);
		expect(generateProcessoJuridico({ court: 10 })).toBe(null);
		expect(generateProcessoJuridico({ court: 1.5 })).toBe(null);
		expect(generateProcessoJuridico({ court: -1 })).toBe(null);
	});

	it("should return null for non integer years", () => {
		expect(generateProcessoJuridico({ year: currentYear + 0.5 })).toBe(null);
		expect(generateProcessoJuridico({ year: Number.NaN })).toBe(null);
	});
});
