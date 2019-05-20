import { isLastChar, onlyNumbers } from '../../helpers';

/**
 * Length of a valid Títulos Convênios
 */
export const LENGTH = 48;

/**
 * Dots positions in a formatted Títulos Convênios
 */
export const DOT_INDEXES = [11, 23, 35];

/**
 * Formats the given string with a Títulos Convênios mask
 *
 * @param {string} str
 * @returns {string};
 */
export default function format(str: string): string {
  if (!str) return '';

  const numeric = onlyNumbers(str);

  return numeric
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, numeric) && DOT_INDEXES.indexOf(index) >= 0) {
        return `${result}.`;
      }

      return result;
    }, '');
}
