import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { CNPJ_LENGTH, DOT_INDEXES, SLASH_INDEXES, HYPHEN_INDEXES } from './constants';

const isLastDigit = (cnpj, index) => index === cnpj.length - 1;

export default function formatCnpj(cnpj) {
  if (!cnpj) return '';

  const numericCNPJ = onlyNumbers(cnpj);

  const arrayCNPJ = numericCNPJ.split('');

  return arrayCNPJ
    .map((digit, index) => {
      if (!isLastDigit(numericCNPJ, index)) {
        if (DOT_INDEXES.includes(index)) return `${digit}.`;
        if (SLASH_INDEXES.includes(index)) return `${digit}/`;
        if (HYPHEN_INDEXES.includes(index)) return `${digit}-`;
      }
      return index < CNPJ_LENGTH ? digit : '';
    })
    .join('');
}
