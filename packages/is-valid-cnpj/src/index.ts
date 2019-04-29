import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import generateChecksum from '@brazilian-utils/helper-generate-checksum';

import { BLACKLIST, CHECK_DIGITS } from './constants';

const isValidCnpjFormat = (cnpj: string) => /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/.test(cnpj);

const belongsToBlacklist = (cnpj: string) => BLACKLIST.includes(cnpj);

const isValidChecksum = (cnpj: string) =>
  CHECK_DIGITS.every(verifierPos => {
    const digits = cnpj.slice(0, verifierPos).split('');
    const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    if (verifierPos === CHECK_DIGITS[CHECK_DIGITS.length - 1]) weights.unshift(6);

    const mod = generateChecksum(digits.reduce((a, b) => a + b, ''), weights) % 11;

    return cnpj[verifierPos] === String(mod < 2 ? 0 : 11 - mod);
  });

export default function isValidCnpj(cnpj: string) {
  if (!cnpj) return false;

  const numericCNPJ = onlyNumbers(cnpj);

  return isValidCnpjFormat(cnpj)
    && !belongsToBlacklist(numericCNPJ)
    && isValidChecksum(numericCNPJ);
}
