import { State, STATES, STATES_DATA } from '../../common/states';

import { isLastChar, onlyNumbers, generateChecksum, generateRandomNumber } from '../../helpers';

export const LENGTH = 11;

export const DOT_INDEXES = [2, 5];

export const HYPHEN_INDEXES = [8];

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

export const CHECK_DIGITS_INDEXES = [9, 10];

export function format(cpf: string): string {
  const digits = onlyNumbers(cpf);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, i) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(i, digits)) {
        if (DOT_INDEXES.indexOf(i) >= 0) return `${result}.`;
        if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}

export function generate(state?: State): string {
  const stateCode = state && STATES.includes(state) ? STATES_DATA[state].code : generateRandomNumber(1);
  const baseCPF = generateRandomNumber(LENGTH - 3) + stateCode;

  const firstCheckDigitMod = generateChecksum(baseCPF, 10) % 11;
  const firstCheckDigit = (firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod).toString();

  const secondCheckDigitMod = generateChecksum(baseCPF + firstCheckDigit, 11) % 11;
  const secondCheckDigit = (secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod).toString();

  return `${baseCPF}${firstCheckDigit.toString()}${secondCheckDigit.toString()}`;
}

export function isValidFormat(cpf: string): boolean {
  return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(cpf);
}

export function isReservedNumber(cpf: string): boolean {
  return RESERVED_NUMBERS.indexOf(cpf) >= 0;
}

// TODO: move to checksum helper
export function isValidChecksum(cpf: string): boolean {
  return CHECK_DIGITS_INDEXES.every(i => {
    const mod =
      generateChecksum(
        cpf
          .slice(0, i)
          .split('')
          .reduce((acc, digit) => acc + digit, ''),
        i + 1
      ) % 11;

    return cpf[i] === String(mod < 2 ? 0 : 11 - mod);
  });
}

export function isValid(cpf: string): boolean {
  if (!cpf || typeof cpf !== 'string') return false;

  const digits = onlyNumbers(cpf);

  return isValidFormat(cpf) && !isReservedNumber(digits) && isValidChecksum(digits);
}
