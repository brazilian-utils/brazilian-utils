import { isLastChar, onlyNumbers } from '../../helpers';

export const LENGTH = 8;

export const HYPHEN_INDEXES = [4];

function isValidLength(cep: string) {
  return cep.length === LENGTH;
}

export function format(cep: string): string {
  const digits = onlyNumbers(cep);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, i) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(i, digits)) {
        if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}

export function isValid(cep: string) {
  if (!cep || typeof cep !== 'string') return false;

  const digits = onlyNumbers(cep);

  return isValidLength(digits);
}
