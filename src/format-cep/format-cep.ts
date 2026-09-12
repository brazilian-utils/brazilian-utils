import { type FormatParams, format } from "../_internals/format/format";
import { isNullish } from "../_internals/is-nullish/is-nullish";
import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

export type FormatCepOptions = Pick<FormatParams, "pad">;

/**
 * Formats a given value as a Brazilian postal code (CEP).
 *
 * @param {string|number} value - The value to be formatted, either as a string or a number.
 * @param {FormatCepOptions} [options] - Optional formatting options.
 * @param {boolean} options.pad - Whether to pad the value with leading zeros.
 * @returns {string} The formatted CEP string in the pattern "00000-000".
 *
 * @example
 * ```typescript
 * formatCep("01310930"); // "01310-930"
 * formatCep("1310930", { pad: true }); // "01310-930"
 * ```
 *
 * @see Official: https://www.correios.com.br/enviar/precisa-de-ajuda/tudo-sobre-cep
 */
export const formatCep = (value: string | number, options?: FormatCepOptions): string =>
	isNullish(value)
		? ""
		: format({
				pad: options?.pad,
				value: sanitizeToDigits(value),
				pattern: "00000-000",
			});
