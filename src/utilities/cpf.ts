import { onlyNumbers, isLastChar } from '../helpers';

export const CPF_LENGTH = 11;
export const DOT_INDEXES = [2, 5];
export const HYPHEN_INDEXES = [8];

export function formatCPF(cpf: string) {
  const digits = onlyNumbers(cpf);

  return digits
    .slice(0, CPF_LENGTH)
    .split('')
    .reduce((prev, curr, idx) => {
      const result = `${prev}${curr}`;

      if (!isLastChar(idx, digits)) {
        if (DOT_INDEXES.indexOf(idx) >= 0) return `${result}.`;
        if (HYPHEN_INDEXES.indexOf(idx) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}
