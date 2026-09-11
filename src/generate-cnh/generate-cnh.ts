import { calculateCnhFirstVerifier } from "../_internals/calculate-cnh-first-verifier/calculate-cnh-first-verifier";
import { calculateCnhSecondVerifier } from "../_internals/calculate-cnh-second-verifier/calculate-cnh-second-verifier";
import { generateRandomNumber } from "../_internals/generate-random-number/generate-random-number";
import { isRepeatedDigits } from "../_internals/is-repeated-digits/is-repeated-digits";

/**
 * Generates a valid random CNH (Carteira Nacional de Habilitação, the Brazilian driver's license number).
 *
 * Uses `Math.random()` internally, so it is not cryptographically secure, do not use for security purposes.
 *
 * @returns {string} A valid 11-digit CNH string without formatting.
 *
 * @example
 * ```typescript
 * generateCnh(); // "00000000119"
 * ```
 *
 * @see Official: https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm
 * @see Based on: https://siga0984.wordpress.com/2019/05/01/algoritmos-validacao-de-cnh/
 */
export const generateCnh = (): string => {
	let base = generateRandomNumber(9);

	while (isRepeatedDigits(base)) {
		base = generateRandomNumber(9);
	}

	const { firstVerifier, decrement } = calculateCnhFirstVerifier(base);
	const secondVerifier = calculateCnhSecondVerifier({ base, decrement });

	return `${base}${firstVerifier}${secondVerifier}`;
};
