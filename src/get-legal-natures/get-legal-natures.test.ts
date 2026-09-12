import { describe, expect, it } from "../_internals/test/runtime";
import { getLegalNatures } from "./get-legal-natures";

describe("getLegalNatures", () => {
	it("should return legal nature entries", () => {
		expect(getLegalNatures()["2062"]).toBe("Sociedade Empresária Limitada");
	});

	it("should use the descriptions of the 2021 CONCLA table", () => {
		expect(getLegalNatures()["1015"]).toBe("Órgão Público do Poder Executivo Federal");
		expect(getLegalNatures()["5010"]).toBe("Organização Internacional");
		expect(getLegalNatures()["3999"]).toBe("Associação Privada");
	});

	it("should return a copy, so mutating the result does not change the table", () => {
		const legalNatures = getLegalNatures();
		legalNatures["2062"] = "changed";

		expect(getLegalNatures()["2062"]).toBe("Sociedade Empresária Limitada");
	});
});
