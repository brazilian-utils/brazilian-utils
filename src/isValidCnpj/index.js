const BLACKLIST = [
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

const CNPJ_LENGTH = 14;

const CHECK_DIGITS = [12, 13];

const isValidLength = (cnpj) => cnpj.length === CNPJ_LENGTH;

const belongsToBlacklist = (cnpj) => BLACKLIST.includes(cnpj);

// inspired by https://github.com/cyberglot/bradoc/blob/master/lib/cnpj.js#L6
const isValidChecksum = (cnpj) => CHECK_DIGITS.every((index) => {
  const digits = cnpj.slice(0, index).split('');

  let weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  if (index === CHECK_DIGITS[CHECK_DIGITS.length - 1]) weights.unshift(6);

  const mod = digits.reduce((acc, digit, i) => acc += digit * weights[i], 0) % 11;

  return cnpj[index] == (mod < 2 ? 0 : 11 - mod);
});

const normalize = (cnpj) => String(cnpj).replace(/[^\d]/g, '');

export default function isValidCnpj(cnpj) {
  if (!cnpj) return false;

  const normalizedCnpj = normalize(cnpj);

  return isValidLength(normalizedCnpj) && !belongsToBlacklist(normalizedCnpj) && isValidChecksum(normalizedCnpj);
}
