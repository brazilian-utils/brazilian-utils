import { describe, expect, it } from "../_internals/test/runtime";
import { getFormatLicensePlate } from "./get-format-license-plate";

describe("getFormatLicensePlate", () => {
	it("should identify supported formats", () => {
		expect(getFormatLicensePlate("ABC1234")).toBe("LLLNNNN");
		expect(getFormatLicensePlate("ABC1D23")).toBe("LLLNLNN");
	});

	it("should return null for the withdrawn motorcycle sequence", () => {
		expect(getFormatLicensePlate("ABC12D3")).toBeNull();
	});

	it("should return null when the value has extra characters beyond the license plate length", () => {
		expect(getFormatLicensePlate("ABC1234EXTRA")).toBeNull();
	});

	it("should return null when the value does not match any supported format", () => {
		expect(getFormatLicensePlate("invalid")).toBeNull();
	});
});
