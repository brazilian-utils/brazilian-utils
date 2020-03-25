import { onlyNumbers, isLastChar } from '../../helpers';

export const LENGTH = 20;

export const DOT_INDEXES = [8, 12, 15];

export const HYPHEN_INDEXES = [6];

export function format(processoJuridico: string) {
  const digits = onlyNumbers(processoJuridico);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, processoJuridico)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }
      return result;
    }, '');
}
