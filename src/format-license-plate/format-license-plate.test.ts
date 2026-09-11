import { describe, expect, it } from "../_internals/test/runtime";
import { formatLicensePlate } from "./format-license-plate";

describe("formatLicensePlate", () => {
	it("should format old pattern license plates", () => {
		expect(formatLicensePlate("")).toBe("");
		expect(formatLicensePlate("a")).toBe("A");
		expect(formatLicensePlate("ab")).toBe("AB");
		expect(formatLicensePlate("abc")).toBe("ABC");
		expect(formatLicensePlate("abc1")).toBe("ABC-1");
		expect(formatLicensePlate("abc12")).toBe("ABC-12");
		expect(formatLicensePlate("abc123")).toBe("ABC-123");
		expect(formatLicensePlate("abc1234")).toBe("ABC-1234");
	});

	it("should keep mercosul plates normalized", () => {
		expect(formatLicensePlate("")).toBe("");
		expect(formatLicensePlate("a")).toBe("A");
		expect(formatLicensePlate("ab")).toBe("AB");
		expect(formatLicensePlate("abc")).toBe("ABC");
		expect(formatLicensePlate("abc1")).toBe("ABC-1");
		expect(formatLicensePlate("abc1d")).toBe("ABC1D");
		expect(formatLicensePlate("abc1d2")).toBe("ABC1D2");
		expect(formatLicensePlate("abc1d23")).toBe("ABC1D23");
	});

	it("should remove non alphanumeric characters", () => {
		expect(formatLicensePlate("abc-1234")).toBe("ABC-1234");
		expect(formatLicensePlate("abc1-d23")).toBe("ABC1D23");
	});

	it("should return an empty string when the tail matches no supported format", () => {
		expect(formatLicensePlate("abc1da2")).toBe("");
		expect(formatLicensePlate("abc12d")).toBe("");
		expect(formatLicensePlate("abc12d3")).toBe("");
	});
});
