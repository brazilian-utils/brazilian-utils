import { describe, expect, it } from "../_internals/test/runtime";
import { isValidLandlinePhone } from "../is-valid-landline-phone/is-valid-landline-phone";
import { isValidMobilePhone } from "../is-valid-mobile-phone/is-valid-mobile-phone";
import { isValidPhone } from "../is-valid-phone/is-valid-phone";
import { isValidServicePhone } from "../is-valid-service-phone/is-valid-service-phone";
import { generatePhone } from "./generate-phone";

describe("generatePhone", () => {
	it("should generate a valid mobile phone", () => {
		expect(isValidMobilePhone(generatePhone("mobile"), { version: 2 })).toBe(true);
	});

	it("should generate a valid landline phone", () => {
		expect(isValidLandlinePhone(generatePhone("landline"))).toBe(true);
	});

	it("should generate a valid service phone", () => {
		expect(isValidServicePhone(generatePhone("service"))).toBe(true);
	});

	it("should generate a valid phone when type is omitted", () => {
		expect(isValidPhone(generatePhone())).toBe(true);
	});

	it("should generate 200 valid phone numbers for every type", () => {
		for (let i = 0; i < 200; i++) {
			expect(isValidMobilePhone(generatePhone("mobile"), { version: 2 })).toBe(true);
			expect(isValidLandlinePhone(generatePhone("landline"))).toBe(true);
			expect(isValidServicePhone(generatePhone("service"))).toBe(true);
			expect(isValidPhone(generatePhone("service"), { accept: ["service"] })).toBe(true);
			expect(isValidPhone(generatePhone())).toBe(true);
		}
	});

	it("should not generate a service phone when type is omitted", () => {
		for (let i = 0; i < 200; i++) {
			expect(isValidServicePhone(generatePhone())).toBe(false);
		}
	});

	it("should generate service phones that survive a format round-trip", () => {
		for (let i = 0; i < 200; i++) {
			const phone = generatePhone("service");

			expect(isValidPhone(phone, { accept: ["mobile", "landline", "service"] })).toBe(true);
		}
	});
});
