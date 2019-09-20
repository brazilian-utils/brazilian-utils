import { onlyNumbers, isLastChar } from '../helpers';

export const CNPJ_LENGTH = 14;
export const SLASH_INDEXES = [7];
export const DOT_INDEXES = [1, 4];
export const HYPHEN_INDEXES = [11];

export function formatCNPJ(cnpj: string) {
  const digits = onlyNumbers(cnpj);

  return digits
    .slice(0, CNPJ_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (SLASH_INDEXES.includes(index)) return `${result}/`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }

      return result;
    }, '');
}
