import onlyNumbers from '../../helpers/onlyNumbers';
import generateChecksum from '../../helpers/generateChecksum';

export const BLACKLIST = [
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

export const CNPJ_LENGTH = 14;

export const CHECK_DIGITS = [12, 13];

const isValidLength = (cnpj: string) => cnpj.length === CNPJ_LENGTH;

const belongsToBlacklist = (cnpj: string) => BLACKLIST.includes(cnpj);

const isValidChecksum = (cnpj: string) =>
  CHECK_DIGITS.every(verifierPos => {
    const digits = cnpj.slice(0, verifierPos).split('');
    const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    if (verifierPos === CHECK_DIGITS[CHECK_DIGITS.length - 1]) {
      weights.unshift(6);
    }

    const mod =
      generateChecksum(digits.reduce((a, b) => a + b, ''), weights) % 11;

    return cnpj[verifierPos] === String(mod < 2 ? 0 : 11 - mod);
  });

export default function isValidCnpj(cnpj: string) {
  if (!cnpj) {
    return false;
  }

  const numericCNPJ = onlyNumbers(cnpj);

  return (
    isValidLength(numericCNPJ) &&
    !belongsToBlacklist(numericCNPJ) &&
    isValidChecksum(numericCNPJ)
  );
}
