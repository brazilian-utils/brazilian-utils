import { isLastChar, onlyNumbers } from '../../helpers';

/**
 * Length of a valid CPF
 */
export const CPF_LENGTH = 11;

/**
 * Dot positions in a formatted CPF
 */
export const DOT_INDEXES = [2, 5];

/**
 * Hyphen position in a formatted CPF
 */
export const HYPHEN_INDEXES = [8];

/**
 * Formats the given string with a CPF mask
 *
 * @param cpf CPF to format
 */
export default function format(cpf: string) {
  const numericCPF = onlyNumbers(cpf);

  return numericCPF
    .slice(0, CPF_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, numericCPF)) {
        if (DOT_INDEXES.includes(index)) {
          return `${result}.`;
        }
        if (HYPHEN_INDEXES.includes(index)) {
          return `${result}-`;
        }
      }

      return result;
    }, '');
}
