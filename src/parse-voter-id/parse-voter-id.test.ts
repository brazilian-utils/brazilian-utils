import { describe, expect, it } from "../_internals/test/runtime";
import { parseVoterId } from "./parse-voter-id";

describe("parseVoterId", () => {
	it("should remove voter id formatting", () => {
		expect(parseVoterId("1234 5678 01 24")).toBe("123456780124");
	});

	it("should ignore digits after the voter id length (non SP/MG)", () => {
		expect(parseVoterId("12345678032499")).toBe("123456780324");
	});

	it("should keep up to 13 digits for São Paulo (01) voter ids", () => {
		expect(parseVoterId("1234 5678 8 01 91")).toBe("1234567880191");
	});

	it("should keep up to 13 digits for Minas Gerais (02) voter ids", () => {
		expect(parseVoterId("1234567880299")).toBe("1234567880299");
	});

	it("should ignore digits after the 13-digit voter id length for SP/MG", () => {
		expect(parseVoterId("123456788019199")).toBe("1234567880191");
	});
});
