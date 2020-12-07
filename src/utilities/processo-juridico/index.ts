import { onlyNumbers, isLastChar } from '../../helpers';

export const LENGTH = 20;

export const DOT_INDEXES = [8, 12, 15];

export const HYPHEN_INDEXES = [6];

export const CHECK_DIGIT_START_POSITION = 7;
export const CHECK_DIGIT_LENGTH = 2;

// MOD97_10 formula = mod(98 - mod(data * 100, 97), 97)
export const MOD_97_10_QUOCIENT = 97;

export const MOD_97_10_SUM = 98;

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

export function verifyDigit(processo: string): boolean {
  const digits = processo.split('');
  const verificationDigits = digits.splice(CHECK_DIGIT_START_POSITION, CHECK_DIGIT_LENGTH).join('');

  const digits1to11 = digits.slice(0, 11).reduce((acc, digit, index) => {
    return acc + +digit * Math.pow(10, 10 - index);
  }, 0);

  const firstRemainder = digits1to11 % MOD_97_10_QUOCIENT;

  const digits12to18 = digits.slice(11).reduce((acc, digit, index) => {
    return acc + +digit * Math.pow(10, 6 - index);
  }, 0);

  const secondRemainder = (firstRemainder * 1_000_000_000 + digits12to18 * 100) % MOD_97_10_QUOCIENT;

  const verifier = MOD_97_10_SUM - secondRemainder;
  return verifier === +verificationDigits;
}

export function isValid(processoJuridico: string): boolean {
  if (!processoJuridico || typeof processoJuridico !== 'string') return false;
  const digits = onlyNumbers(processoJuridico);

  if (digits.length !== LENGTH) {
    return false;
  }

  return verifyDigit(digits);
}
