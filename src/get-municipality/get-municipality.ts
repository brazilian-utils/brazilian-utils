import { DATA as CITIES_DATA } from "../_internals/constants/cities";
import { isNullish } from "../_internals/is-nullish/is-nullish";
import { removeAccents } from "../remove-accents/remove-accents";

export type GetMunicipalityByCodeOptions = {
	/** The 7 digit IBGE municipality code. */
	code: string;
};

export type GetMunicipalityByNameOptions = {
	/** The municipality name, accents and casing ignored. */
	municipalityName: string;
	/** The two letter state code the municipality belongs to, e.g. "SP". */
	uf: string;
};

export type GetMunicipalityOptions = GetMunicipalityByCodeOptions | GetMunicipalityByNameOptions;

let codeIndex: Map<string, [string, string]> | undefined;

const normalizeName = (value: string): string => removeAccents(value).trim().toUpperCase();

const getMunicipalityByCode = (code: string): [string, string] | null => {
	if (typeof code !== "string" || !/^\d{7}$/.test(code)) return null;

	if (!codeIndex) {
		codeIndex = new Map();

		for (const [stateCode, municipalities] of Object.entries(CITIES_DATA)) {
			for (const [name, ibgeCode] of municipalities) {
				codeIndex.set(ibgeCode, [name, stateCode]);
			}
		}
	}

	return codeIndex.get(code) ?? null;
};

const getMunicipalityCodeByName = ({
	municipalityName,
	uf,
}: GetMunicipalityByNameOptions): string | null => {
	if (typeof municipalityName !== "string" || municipalityName === "") return null;
	if (typeof uf !== "string") return null;

	const normalizedUf = uf.trim().toUpperCase();

	if (!/^[A-Z]{2}$/.test(normalizedUf)) return null;

	const stateEntry = Object.entries(CITIES_DATA).find(([code]) => code === normalizedUf);

	if (!stateEntry) return null;

	const normalizedName = normalizeName(municipalityName);
	const match = stateEntry[1].find(([name]) => normalizeName(name) === normalizedName);

	return match ? match[1] : null;
};

/**
 * Looks a Brazilian municipality up in the offline IBGE "localidades" dataset.
 *
 * Given a `code` it resolves the municipality name and its UF; given a `municipalityName`
 * and a `uf` it resolves the IBGE code. The name lookup ignores accents and casing.
 * Validation failures and unknown municipalities are reported as `null`.
 *
 * @param {GetMunicipalityOptions} options - Either `{ code }` or `{ municipalityName, uf }`.
 * @returns {Promise<[string, string] | string | null>} The `[name, uf]` pair when looking up
 * by code, the IBGE code when looking up by name, or null when the municipality is unknown
 * (this includes `options` itself being missing or not an object, e.g. `null`, `undefined`,
 * an array or a primitive).
 *
 * @example
 * ```typescript
 * await getMunicipality({ code: "3550308" }); // ["São Paulo", "SP"]
 * await getMunicipality({ municipalityName: "sao paulo", uf: "sp" }); // "3550308"
 * ```
 *
 * @see Official: https://servicodados.ibge.gov.br/api/docs/localidades
 */
export const getMunicipality = async (
	options: GetMunicipalityOptions,
): Promise<[string, string] | null | string> => {
	if (isNullish(options) || typeof options !== "object" || Array.isArray(options)) {
		return null;
	}

	if ("code" in options) {
		return getMunicipalityByCode(options.code);
	}

	return getMunicipalityCodeByName(options);
};
