import {
	CNPJ_FIRST_DIGIT_WEIGHTS,
	CNPJ_LENGTH,
	CNPJ_SECOND_DIGIT_WEIGHTS,
} from "../_internals/constants/cnpj";
import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { RESERVED_NUMBERS } from "./constants";

export type IsValidCnpjOptions = {
	/** Which CNPJ format to accept: `1` numeric only, `2` alphanumeric (default: `1`). */
	version?: 1 | 2;
};

const FORMAT_REGEX =
	/^[0-9A-Z]{2}[\s.\-/]*[0-9A-Z]{3}[\s.\-/]*[0-9A-Z]{3}[\s.\-/]*[0-9A-Z]{4}[\s.\-/]*[0-9]{2}$/;

const NUMERIC_FORMAT_REGEX = /^\d{2}[\s.\-/]*\d{3}[\s.\-/]*\d{3}[\s.\-/]*\d{4}[\s.\-/]*\d{2}$/;

const cleanCnpj = (cnpj: string): string => {
	let result = "";
	for (let i = 0; i < cnpj.length; i++) {
		if (result.length > CNPJ_LENGTH) break;

		const char = cnpj[i];
		if (
			(char >= "0" && char <= "9") ||
			(char >= "A" && char <= "Z") ||
			(char >= "a" && char <= "z")
		) {
			result += char >= "a" && char <= "z" ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
		}
	}
	return result;
};

const isValidChecksum = (cnpj: string): boolean => {
	let sum = 0;
	for (let i = 0; i < 12; i++) {
		sum += (cnpj.charCodeAt(i) - 48) * CNPJ_FIRST_DIGIT_WEIGHTS[i];
	}
	let mod = sum % 11;
	const expected1 = mod < 2 ? 48 : 48 + 11 - mod;
	if (cnpj.charCodeAt(12) !== expected1) return false;

	sum = 0;
	for (let i = 0; i < 13; i++) {
		sum += (cnpj.charCodeAt(i) - 48) * CNPJ_SECOND_DIGIT_WEIGHTS[i];
	}
	mod = sum % 11;
	const expected2 = mod < 2 ? 48 : 48 + 11 - mod;
	return cnpj.charCodeAt(13) === expected2;
};

/**
 * Validates if a CNPJ (Cadastro Nacional da Pessoa Jurídica) is valid.
 * Supports both numeric (version 1) and alphanumeric (version 2) CNPJ formats.
 * Accepts the usual mask characters (`.`, `-`, `/`) and whitespace around and between groups.
 *
 * @param {string} cnpj - The CNPJ value to be validated.
 * @param {IsValidCnpjOptions} [options] - Optional options.
 * @param {1|2} [options.version] - `1` validates the numeric-only format (the default),
 * `2` validates both the numeric and the alphanumeric formats.
 * @returns {boolean} True if the CNPJ is valid, false otherwise.
 *
 * @example
 * ```typescript
 * // Version 1 (numeric - default)
 * isValidCnpj("12.345.678/0001-95"); // true
 * isValidCnpj("12345678000195"); // true
 * isValidCnpj("12 345 678 0001 95"); // true (whitespace mask)
 * isValidCnpj("00000000000000"); // false (reserved number)
 * isValidCnpj("12345678000190"); // false (invalid checksum)
 *
 * // Version 2 (alphanumeric)
 * isValidCnpj("Q0.SLF.MBD/7VX4-39", { version: 2 }); // true (alphanumeric)
 * isValidCnpj("Q0SLFMBD7VX439", { version: 2 }); // true (alphanumeric)
 * isValidCnpj("q0slfmbd7vx439", { version: 2 }); // true (case-insensitive)
 * ```
 *
 * @see Official: https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/cnpj
 * @see Official: https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/cnpj-alfanumerico
 */
export const isValidCnpj = (cnpj: string, options?: IsValidCnpjOptions): boolean => {
	if (typeof cnpj !== "string" || cnpj === "") return false;

	const cleaned = cleanCnpj(cnpj);

	if (cleaned.length !== CNPJ_LENGTH) return false;

	const trimmed = cnpj.trim();

	const version = options?.version ?? 1;

	let isNumeric = true;
	let hasLetter = false;

	if (version !== 1) {
		for (let i = 0; i < CNPJ_LENGTH; i++) {
			const code = cleaned.charCodeAt(i);
			if (code < 48 || code > 57) {
				isNumeric = false;
				hasLetter = true;
			}
		}
	}

	if (isNumeric) {
		const numeric = sanitizeToDigits(cnpj);

		return (
			NUMERIC_FORMAT_REGEX.test(trimmed) &&
			!RESERVED_NUMBERS.includes(numeric) &&
			isValidChecksum(numeric)
		);
	}

	return hasLetter && FORMAT_REGEX.test(trimmed.toUpperCase()) && isValidChecksum(cleaned);
};
