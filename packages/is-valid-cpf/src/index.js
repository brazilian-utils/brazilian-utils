import normalize from '@brazilian-utils/utils/normalize';

import { BLACKLIST, CPF_LENGTH, CHECK_DIGITS } from './constants';

const isValidLength = (cpf) => cpf.length === CPF_LENGTH;

const belongsToBlacklist = (cpf) => BLACKLIST.includes(cpf);

const isValidChecksum = (cpf) => CHECK_DIGITS.every((index) => {
  const digits = cpf.slice(0, index).split('');

  let weight = digits.length + 1;

  const mod = digits.reduce((acc, digit) => acc + (digit * weight--), 0) % 11;

  return cpf[index] == (mod < 2 ? 0 : 11 - mod);
});

export default function isValidCpf(cpf) {
  if (!cpf) return false;

  const normalizedCpf = normalize(cpf);

  return isValidLength(normalizedCpf) && !belongsToBlacklist(normalizedCpf) && isValidChecksum(normalizedCpf);
}
