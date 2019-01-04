import isLastChar from '@brazilian-utils/helper-is-last-char';
import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import {
  CNPJ_LENGTH,
  DOT_INDEXES,
  HYPHEN_INDEXES,
  SLASH_INDEXES
} from './constants';

export default function formatCnpj(cnpj: string) {
  const numericCNPJ = onlyNumbers(cnpj);

  return numericCNPJ
    .slice(0, CNPJ_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, numericCNPJ)) {
        if (DOT_INDEXES.includes(index)) {
          return `${result}.`;
        }

        if (SLASH_INDEXES.includes(index)) {
          return `${result}/`;
        }

        if (HYPHEN_INDEXES.includes(index)) {
          return `${result}-`;
        }
      }

      return result;
    }, '');
}
