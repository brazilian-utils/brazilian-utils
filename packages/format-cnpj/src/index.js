import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { CNPJ_LENGTH, DOT_INDEXES, SLASH_INDEXES, HYPHEN_INDEXES } from './constants';

const isLastDigit = (cnpj, index) => index === cnpj.length - 1;

export default function formatCnpj(cnpj) {
  if (!cnpj) return '';

  const numericCNPJ = onlyNumbers(cnpj);

  return numericCNPJ
    .slice(0, CNPJ_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastDigit(numericCNPJ, index)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (SLASH_INDEXES.includes(index)) return `${result}/`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }
      return result;
    }, '');
}
