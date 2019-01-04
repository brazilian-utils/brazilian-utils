import isLastChar from '@brazilian-utils/helper-is-last-char';
import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { CPF_LENGTH, DOT_INDEXES, HYPHEN_INDEXES } from './constants';

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
