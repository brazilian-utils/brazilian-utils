import { isLastChar, onlyNumbers } from '../../helpers';

/**
 * Length of a valid Boleto Bancário
 */
export const LENGTH = 47;

/**
 * Dots positions in a formatted Boleto Bancário
 */
export const DOT_INDEXES = [4, 14, 25];

/**
 * Spaces positions in a formatted Boleto Bancário
 */
export const SPACE_INDEXES = [9, 20, 31, 32];

/**
 * Formats the given string with a Boleto Bancário mask
 *
 * @param {string} str
 * @returns {string}
 */
export default function format(str: string): string {
  if (!str) return '';

  const numeric = onlyNumbers(str);

  return numeric
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, numeric)) {
        if (DOT_INDEXES.indexOf(index) >= 0) return `${result}.`;

        if (SPACE_INDEXES.indexOf(index) >= 0) return `${result} `;
      }

      return result;
    }, '');
}
