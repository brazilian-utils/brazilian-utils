import normalize from '@brazilian-utils/utils/normalize';

import { BLACKLIST, CNPJ_LENGTH, CHECK_DIGITS, WEIGHTS } from './constants';

const isValidLength = (cnpj) => cnpj.length === CNPJ_LENGTH;

const belongsToBlacklist = (cnpj) => BLACKLIST.includes(cnpj);

// inspired by https://github.com/cyberglot/bradoc/blob/master/lib/cnpj.js#L6
const isValidChecksum = (cnpj) => CHECK_DIGITS.every((index) => {
  const digits = cnpj.slice(0, index).split('');

  let weights = WEIGHTS;

  if (index === CHECK_DIGITS[CHECK_DIGITS.length - 1]) weights.unshift(6);

  const mod = digits.reduce((acc, digit, i) => acc += digit * weights[i], 0) % 11;

  return cnpj[index] == (mod < 2 ? 0 : 11 - mod);
});

export default function isValidCnpj(cnpj) {
  if (!cnpj) return false;

  const normalizedCnpj = normalize(cnpj);

  return isValidLength(normalizedCnpj) && !belongsToBlacklist(normalizedCnpj) && isValidChecksum(normalizedCnpj);
}
