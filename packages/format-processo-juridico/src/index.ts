import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import isLastChar from '@brazilian-utils/helper-is-last-char';

import { PROCESSO_LENGTH, DOT_INDEXES, HYPHEN_INDEXES } from './constants';

export default function formatProcessoJuridico(processo: string) {
  if (!processo) return '';

  const numericProcesso = onlyNumbers(processo);

  return numericProcesso
    .slice(0, PROCESSO_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, numericProcesso)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }
      return result;
    }, '');
}
