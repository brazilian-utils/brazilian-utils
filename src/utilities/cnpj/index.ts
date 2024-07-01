import { isLastChar } from '../../helpers';

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

const VALID_CHARS_CNPJ = '0123456789ABCDFGHIJKLMNPQRSVWXYZ'

export interface FormatCnpjOptions {
  pad?: boolean;
}

export function format(cnpj: string | number, options: FormatCnpjOptions = {}): string {
  const valueCNPJUppercased = String(cnpj).toUpperCase();
  let digits = onlyValidCNPJAlphanumeric(valueCNPJUppercased);

  if (options.pad) {
    digits = digits.padStart(LENGTH, '0');
  }

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

function charToAsciiValue(char: string): number {
  return char.charCodeAt(0) - 48;
}

function onlyValidCNPJAlphanumeric(input: string): string {
  return input
    .split('')
    .filter(char => VALID_CHARS_CNPJ.includes(char))
    .join('');
}

function generateChecksumCNPJ(base: string, weight: number[]): number {
  const digits = onlyValidCNPJAlphanumeric(base);

  return digits.split('').reduce((acc, char, i) => {
    const value = charToAsciiValue(char);
    return acc + value * weight[i];
  }, 0);
}

function generateCNPJAlphanumericChars(length: number): string {
  const charset = VALID_CHARS_CNPJ;
  return Array(length)
    .fill('')
    .map(() => charset[Math.floor(Math.random() * charset.length)])
    .join('');
}


export function generate(): string {
  const baseCNPJ = generateCNPJAlphanumericChars(LENGTH - 2);
  
  const firstCheckDigitMod = generateChecksumCNPJ(baseCNPJ, FIRST_CHECK_DIGIT_WEIGHTS) % 11;
  const firstCheckDigit = (firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod).toString();

  const secondCheckDigitMod = generateChecksumCNPJ(baseCNPJ + firstCheckDigit, SECOND_CHECK_DIGIT_WEIGHTS) % 11;
  const secondCheckDigit = (secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod).toString();

  return `${baseCNPJ}${firstCheckDigit}${secondCheckDigit}`;
}

function isValidFormat(cnpj: string): boolean {
  return /^[0-9ABCDFGHIJKLMNPQRSVWXYZ]{2}\.?[0-9ABCDFGHIJKLMNPQRSVWXYZ]{3}\.?[0-9ABCDFGHIJKLMNPQRSVWXYZ]{3}\/?[0-9ABCDFGHIJKLMNPQRSVWXYZ]{4}-?\d{2}$/.test(cnpj);
}

export function isReservedNumber(cpf: string): boolean {
  return RESERVED_NUMBERS.indexOf(cpf) >= 0;
}

// TODO: move to checksum helper
export function isValidChecksum(cnpj: string): boolean {
  const weights = [...FIRST_CHECK_DIGIT_WEIGHTS];

  return CHECK_DIGITS_INDEXES.every((i) => {
    if (i === CHECK_DIGITS_INDEXES[CHECK_DIGITS_INDEXES.length - 1]) {
      weights.unshift(6);
    }

    const mod =
      generateChecksumCNPJ(
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
  if (!cnpj || typeof cnpj !== 'string') return false;

  const validValue = onlyValidCNPJAlphanumeric(cnpj);


  return isValidFormat(cnpj) && !isReservedNumber(validValue) && isValidChecksum(validValue);
}
