import { isLastChar, onlyNumbers } from '../../helpers';

/**
 * Length of a valid CNPJ
 */
export const LENGTH = 14;

/**
 * Dots positions in a formatted CNPJ
 */
export const DOT_INDEXES = [1, 4];

/**
 * Slash position in a formatted CNPJ
 */
export const SLASH_INDEXES = [7];

/**
 * Hyphen position in a formatted CNPJ
 */
export const HYPHEN_INDEXES = [11];

/**
 * Formats the given string with a CNPJ mask
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
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (SLASH_INDEXES.includes(index)) return `${result}/`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }

      return result;
    }, '');
}
