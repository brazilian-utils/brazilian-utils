import { describe, expect, it } from "../_internals/test/runtime";
import { isValidLicensePlate } from "../is-valid-license-plate/is-valid-license-plate";
import { generateLicensePlate } from "./generate-license-plate";

describe("generateLicensePlate", () => {
	it("should generate valid plates for all supported formats", () => {
		expect(isValidLicensePlate(generateLicensePlate("LLLNNNN"))).toBe(true);
		expect(isValidLicensePlate(generateLicensePlate("LLLNLNN"))).toBe(true);
	});

	it("should default to the mercosul format", () => {
		const plate = generateLicensePlate();

		expect(isValidLicensePlate(plate)).toBe(true);
		expect(plate).toMatch(/^[A-Z]{3}\d[A-Z]\d{2}$/);
	});

	it("should fall back to the mercosul format when the argument is not a string", () => {
		// @ts-expect-error
		expect(generateLicensePlate(123)).toMatch(/^[A-Z]{3}\d[A-Z]\d{2}$/);
	});
});
