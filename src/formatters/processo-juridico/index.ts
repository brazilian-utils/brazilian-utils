import { isLastChar, onlyNumbers } from '../../helpers';

/**
 * Length of a valid Processo Jurídico
 */
export const LENGTH = 20;

/**
 * Dot positions in a formatted Processo Jurídico
 */
export const DOT_INDEXES = [8, 12, 15];

/**
 * Hyphen positions in a formatted Processo Jurídico
 */
export const HYPHEN_INDEXES = [6];

/**
 * Formats the given string with a Processo Jurídico mask
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
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }

      return result;
    }, '');
}
