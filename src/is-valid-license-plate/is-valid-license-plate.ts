import { getFormatLicensePlate } from "../get-format-license-plate/get-format-license-plate";

/**
 * Validates if a Brazilian license plate (placa de carro ou moto) is valid.
 *
 * Supports the old Brazilian format (ABC-1234) and the Mercosul format (ABC1D23), the single
 * sequence Resolução CONTRAN nº 969/2022 defines for every vehicle, motorcycles included.
 * Accepts the usual mask characters (hyphens, spaces) and is case-insensitive, mirroring
 * `getFormatLicensePlate`/`parseLicensePlate` (single source of truth for the supported
 * formats).
 *
 * @param {string} value - The license plate value to be validated.
 * @returns {boolean} True if the license plate is valid, false otherwise.
 *
 * @example
 * ```typescript
 * isValidLicensePlate("abc1234"); // true (Brazilian format)
 * isValidLicensePlate("ABC-1234"); // true (Brazilian format with hyphen)
 * isValidLicensePlate("ABC 1234"); // true (whitespace mask)
 * isValidLicensePlate("abc1d23"); // true (Mercosul format)
 * isValidLicensePlate("ABC12D3"); // false (not a Mercosul sequence)
 * isValidLicensePlate("ABC1234EXTRA"); // false (too many characters)
 * isValidLicensePlate("invalid"); // false
 * ```
 *
 * @see Official: https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao9692022.pdf
 */
export const isValidLicensePlate = (value: string): boolean =>
	getFormatLicensePlate(value) !== null;
