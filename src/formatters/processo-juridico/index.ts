import { isLastChar, onlyNumbers } from '../../helpers';

export const PROCESSO_LENGTH = 20;

export const DOT_INDEXES = [8, 12, 15];

export const HYPHEN_INDEXES = [6];

export default function formatProcessoJuridico(processo: string) {
  if (!processo) {
    return '';
  }

  const numericProcesso = onlyNumbers(processo);

  return numericProcesso
    .slice(0, PROCESSO_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, numericProcesso)) {
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
