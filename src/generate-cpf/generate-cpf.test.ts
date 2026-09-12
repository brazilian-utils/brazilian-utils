import { CPF_LENGTH } from "../_internals/constants/cpf";
import { DATA } from "../_internals/constants/states";
import { describe, expect, test } from "../_internals/test/runtime";
import { isValidCpf } from "../is-valid-cpf/is-valid-cpf";
import { generateCpf } from "./generate-cpf";

describe("generateCpf", () => {
	test(`should have the right length without mask (${CPF_LENGTH})`, () => {
		expect(generateCpf().length).toBe(CPF_LENGTH);
	});

	test("should return valid CPF", () => {
		for (let i = 0; i < 100; i++) {
			expect(isValidCpf(generateCpf())).toBe(true);
		}
	});

	test("should regenerate the base when it comes out with repeated digits", () => {
		const digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		const originalRandom = Math.random;
		let call = 0;

		Math.random = () => (digits[call++] + 0.5) / 10;

		try {
			const cpf = generateCpf();

			expect(cpf.slice(0, 9)).toBe("123456789");
			expect(isValidCpf(cpf)).toBe(true);
		} finally {
			Math.random = originalRandom;
		}
	});

	describe("should return a valid CPF for each brazilian state with initials", () => {
		for (const state of DATA) {
			test(state.code, () => {
				const cpf = generateCpf(state.code);
				expect(isValidCpf(cpf)).toBe(true);
				expect(cpf.length).toBe(CPF_LENGTH);
			});
		}
	});
});
