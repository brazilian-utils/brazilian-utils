import { isNullish } from "../_internals/is-nullish/is-nullish";
import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LENGTH } from "./constants";

/**
 * Removes CNH (Carteira Nacional de Habilitação) formatting characters and returns only digits.
 *
 * @param {string|number} value - The CNH to be parsed.
 * @returns {string} Up to 11 digits, or an empty string when there is no digit at all.
 *
 * @example
 * ```typescript
 * parseCnh("123456789-00"); // "12345678900"
 * ```
 *
 * @see Official: https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm
 */
export const parseCnh = (value: string | number): string =>
	isNullish(value) ? "" : sanitizeToDigits(value).slice(0, LENGTH);
