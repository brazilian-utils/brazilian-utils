import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { CPF_LENGTH, DOT_INDEXES, HYPHEN_INDEXES } from './constants';

const isLastDigit = (cpf, index) => index === cpf.length - 1;

export default function formatCpf(cpf) {
  if (!cpf) return '';

  const numericCPF = onlyNumbers(cpf);

  return numericCPF
    .slice(0, CPF_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastDigit(numericCPF, index)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }
      return result;
    }, '');
}
