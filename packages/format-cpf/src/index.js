import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { CPF_LENGTH, DOT_INDEXES, HYPHEN_INDEXES } from './constants';

const isLastDigit = (cpf, index) => index === cpf.length - 1;

export default function formatCpf(cpf) {
  if (!cpf) return '';

  const numericCPF = onlyNumbers(cpf);

  const arrayCPF = numericCPF.split('');

  return arrayCPF
    .map((digit, index) => {
      if (!isLastDigit(numericCPF, index)) {
        if (DOT_INDEXES.includes(index)) return `${digit}.`;
        if (HYPHEN_INDEXES.includes(index)) return `${digit}-`;
      }
      return index < CPF_LENGTH ? digit : '';
    })
    .join('');
}
