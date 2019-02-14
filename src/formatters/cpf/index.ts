import { isLastChar, onlyNumbers } from '../../helpers';

export const CPF_LENGTH = 11;
export const DOT_INDEXES = [2, 5];
export const HYPHEN_INDEXES = [8];

export default function formatCpf(cpf: string) {
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
