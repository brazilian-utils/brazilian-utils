import { onlyNumbers, isLastChar, generateChecksum, generateRandomNumber } from '../../helpers';

export const LENGTH = 14;

export const DOT_INDEXES = [1, 4];

export const SLASH_INDEXES = [7];

export const HYPHEN_INDEXES = [11];

export const RESERVED_NUMBERS = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
];

export const CHECK_DIGITS_INDEXES = [12, 13];

export const FIRST_CHECK_DIGIT_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

export const SECOND_CHECK_DIGIT_WEIGHTS = [6, ...FIRST_CHECK_DIGIT_WEIGHTS];

export function format(cnpj: string): string {
  const digits = onlyNumbers(cnpj);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (SLASH_INDEXES.includes(index)) return `${result}/`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }

      return result;
    }, '');
}

export function generate(): string {
  const baseCNPJ = generateRandomNumber(LENGTH - 2);

  const firstCheckDigitMod = generateChecksum(baseCNPJ, FIRST_CHECK_DIGIT_WEIGHTS) % 11;
  const firstCheckDigit = (firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod).toString();

  const secondCheckDigitMod =
    generateChecksum(baseCNPJ + firstCheckDigit, SECOND_CHECK_DIGIT_WEIGHTS) % 11;
  const secondCheckDigit = (secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod).toString();

  return `${baseCNPJ}${firstCheckDigit}${secondCheckDigit}`;
}

export function isValidFormat(cnpj: string): boolean {
  return /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/.test(cnpj);
}

export function isReservedNumber(cpf: string): boolean {
  return RESERVED_NUMBERS.indexOf(cpf) >= 0;
}

// TODO: move to checksum helper
export function isValidChecksum(cnpj: string): boolean {
  const weights = [...FIRST_CHECK_DIGIT_WEIGHTS];

  return CHECK_DIGITS_INDEXES.every(i => {
    if (i === CHECK_DIGITS_INDEXES[CHECK_DIGITS_INDEXES.length - 1]) {
      weights.unshift(6);
    }

    const mod =
      generateChecksum(
        cnpj
          .slice(0, i)
          .split('')
          .reduce((acc, digit) => acc + digit, ''),
        weights
      ) % 11;

    return cnpj[i] === String(mod < 2 ? 0 : 11 - mod);
  });
}

export function isValid(cnpj: string): boolean {
  const numbers = onlyNumbers(cnpj);

  return isValidFormat(cnpj) && !isReservedNumber(numbers) && isValidChecksum(numbers);
}
