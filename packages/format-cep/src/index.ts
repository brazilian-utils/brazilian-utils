import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import isLastChar from '@brazilian-utils/helper-is-last-char';

import { CEP_LENGTH, HYPHEN_INDEXES } from './constants';

export default function formatCep(cep: string) {
  if (!cep) return '';

  const numericCEP = onlyNumbers(cep);

  return numericCEP
    .slice(0, CEP_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, numericCEP)) {
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }
      return result;
    }, '');
}
