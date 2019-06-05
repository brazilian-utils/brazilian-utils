import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import generateChecksum from '@brazilian-utils/helper-generate-checksum';

export const LENGTH = 14;

export const RESERVED_ENTRIES = [
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

export const VERIFICATION_INDEXES = [12, 13];

function isReserved(str: string): boolean {
  return RESERVED_ENTRIES.includes(str);
}

function isFormatValid(str: string): boolean {
  return /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/.test(str);
}

function isCheckSumValid(str: string): boolean {
  return VERIFICATION_INDEXES.every(index => {
    const pieces = str.slice(0, index).split('');
    const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    if (index === VERIFICATION_INDEXES[VERIFICATION_INDEXES.length - 1]) {
      weights.unshift(6);
    }

    const mod =
      generateChecksum(pieces.reduce((a, b) => a + b, ''), weights) % 11;

    return str[index] === String(mod < 2 ? 0 : 11 - mod);
  });
}

export default function isValidCnpj(str: string): boolean {
  const numbers = onlyNumbers(str);

  return isFormatValid(str) && !isReserved(numbers) && isCheckSumValid(numbers);
}
