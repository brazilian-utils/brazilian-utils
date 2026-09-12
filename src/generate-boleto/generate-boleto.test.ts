import { ARRECADACAO_LINE_LENGTH } from "../_internals/constants/arrecadacao";
import { BOLETO_LENGTH } from "../_internals/constants/boleto";
import { describe, expect, test } from "../_internals/test/runtime";
import { formatBoleto } from "../format-boleto/format-boleto";
import { getBoletoInfo } from "../get-boleto-info/get-boleto-info";
import { isValidBoleto } from "../is-valid-boleto/is-valid-boleto";
import { parseBoleto } from "../parse-boleto/parse-boleto";
import { generateBoleto } from "./generate-boleto";

describe("generateBoleto", () => {
	test("should generate a valid boleto", () => {
		const boleto = generateBoleto();
		expect(boleto).toHaveLength(BOLETO_LENGTH);
		expect(/^\d+$/.test(boleto)).toBe(true);
		expect(isValidBoleto(boleto)).toBe(true);
	});

	test("should generate different boletos on multiple calls, retrying with extra draws on the astronomically unlikely case all three collide", () => {
		const boleto1 = generateBoleto();
		const boleto2 = generateBoleto();
		const boleto3 = generateBoleto();

		const allSame = boleto1 === boleto2 && boleto2 === boleto3;
		if (allSame) {
			const set = new Set([boleto1, generateBoleto(), generateBoleto()]);
			expect(set.size).toBeGreaterThan(1);
		}
	});

	test("should generate valid boletos that pass validation once formatted", () => {
		for (let i = 0; i < 10; i++) {
			const boleto = generateBoleto();
			const formatted = `${boleto.slice(0, 9)} ${boleto.slice(9, 20)} ${boleto.slice(20, 31)} ${boleto.slice(31, 32)} ${boleto.slice(32)}`;
			expect(isValidBoleto(formatted)).toBe(true);
		}
	});

	test("should generate multiple valid boletos", () => {
		const boletos = new Set<string>();
		for (let i = 0; i < 100; i++) {
			const boleto = generateBoleto();
			expect(isValidBoleto(boleto)).toBe(true);
			expect(boletos.has(boleto)).toBe(false);
			boletos.add(boleto);
		}
		expect(boletos.size).toBe(100);
	});

	describe("arrecadação", () => {
		test("should generate a valid arrecadação bank slip", () => {
			const boleto = generateBoleto({ type: "arrecadacao" });

			expect(boleto).toHaveLength(ARRECADACAO_LINE_LENGTH);
			expect(/^8\d+$/.test(boleto)).toBe(true);
			expect(isValidBoleto(boleto)).toBe(true);
		});

		test("should generate multiple valid arrecadação bank slips", () => {
			for (let i = 0; i < 100; i++) {
				const boleto = generateBoleto({ type: "arrecadacao" });

				expect(isValidBoleto(boleto)).toBe(true);
				expect(getBoletoInfo(boleto)?.type).toBe("arrecadacao");
			}
		});

		test("should generate a bank slip that survives format and parse", () => {
			for (let i = 0; i < 10; i++) {
				const boleto = generateBoleto({ type: "arrecadacao" });

				expect(parseBoleto(formatBoleto(boleto))).toBe(boleto);
				expect(isValidBoleto(formatBoleto(boleto))).toBe(true);
			}
		});

		test("should keep generating bancário bank slips by default", () => {
			expect(generateBoleto({})).toHaveLength(BOLETO_LENGTH);
			expect(generateBoleto({ type: "bancario" })).toHaveLength(BOLETO_LENGTH);
		});
	});
});
