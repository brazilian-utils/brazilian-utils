import { generateChecksum } from '../../helpers';

export const LENGTH = 11;

export const WEIGHTS = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

export const RESERVED_NUMBERS = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
];

function isValidLength(pis: string): boolean {
  return pis.length === LENGTH;
}

function isReservedNumber(pis: string): boolean {
  return RESERVED_NUMBERS.indexOf(pis) >= 0;
}

function hasOnlyNumbers(pis: string): boolean {
  return !!pis.match(/^[0-9]+$/);
}

function removeSeparators(pis: string): string {
  return pis.replace(/[ ().,*-]/g, '');
}

export function isValid(pis: string): boolean {
  if (!pis || typeof pis !== 'string') return false;

  const numeric = removeSeparators(pis);

  if (!isValidLength(numeric) || isReservedNumber(numeric) || !hasOnlyNumbers(numeric)) return false;

  const weightedChecksum = generateChecksum(numeric.substr(0, numeric.length - 1), WEIGHTS);
  const verifyingDigit = +numeric.charAt(numeric.length - 1);
  const calculatedDigit = 11 - (weightedChecksum % 11);

  return (
    calculatedDigit === verifyingDigit ||
    (calculatedDigit === 10 && verifyingDigit === 0) ||
    (calculatedDigit === 11 && verifyingDigit === 0)
  );
}
