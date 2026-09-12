import type { LicensePlateFormat } from "../get-format-license-plate/get-format-license-plate";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const DEFAULT_FORMAT = "LLLNLNN";

export type GenerateLicensePlateFormat = LicensePlateFormat;

const randomLetter = (): string => LETTERS[Math.floor(Math.random() * LETTERS.length)];

const randomDigit = (): string => Math.floor(Math.random() * 10).toString();

/**
 * Generates a valid random Brazilian license plate (placa de carro ou moto).
 *
 * Uses `Math.random()` internally, so it is not cryptographically secure, do not use for
 * security purposes.
 *
 * @param {GenerateLicensePlateFormat} format - The format to generate. Defaults to the
 * Mercosul format ("LLLNLNN"), the single sequence Resolução CONTRAN nº 969/2022 defines
 * for every vehicle, motorcycles included.
 * @returns {string} A randomly generated license plate matching the requested format.
 *
 * @example
 * ```typescript
 * generateLicensePlate(); // "ABC1D23" (Mercosul)
 * generateLicensePlate("LLLNNNN"); // "ABC1234" (old Brazilian format)
 * ```
 *
 * @see Official: https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao9692022.pdf
 */
export const generateLicensePlate = (
	format: GenerateLicensePlateFormat = DEFAULT_FORMAT,
): string => {
	const safeFormat = typeof format === "string" ? format : DEFAULT_FORMAT;

	return safeFormat
		.split("")
		.map((char) => (char === "L" ? randomLetter() : randomDigit()))
		.join("");
};
