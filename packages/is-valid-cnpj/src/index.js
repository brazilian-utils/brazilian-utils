import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { BLACKLIST, CNPJ_LENGTH, CHECK_DIGITS } from './constants';

const isValidLength = cnpj => cnpj.length === CNPJ_LENGTH;

const belongsToBlacklist = cnpj => BLACKLIST.includes(cnpj);

const isValidChecksum = cnpj =>
  CHECK_DIGITS.every(index => {
    const digits = cnpj.slice(0, index).split('');

    const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    if (index === CHECK_DIGITS[CHECK_DIGITS.length - 1]) weights.unshift(6);

    const mod = digits.reduce((acc, digit, i) => acc + digit * weights[i], 0) % 11;

    return cnpj[index] === String(mod < 2 ? 0 : 11 - mod);
  });

export default function isValidCnpj(cnpj) {
  if (!cnpj) return false;

  const numericCNPJ = onlyNumbers(cnpj);

  return isValidLength(numericCNPJ) && !belongsToBlacklist(numericCNPJ) && isValidChecksum(numericCNPJ);
}
