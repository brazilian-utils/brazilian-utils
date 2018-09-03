import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import generateChecksum from '@brazilian-utils/helper-generate-checksum';

import { BLACKLIST, CPF_LENGTH, CHECK_DIGITS } from './constants';

const isValidLength = cpf => cpf.length === CPF_LENGTH;

const belongsToBlacklist = cpf => BLACKLIST.includes(cpf);

const isValidChecksum = cpf =>
  CHECK_DIGITS.every(verifierPos => {
    const mod = generateChecksum(cpf.slice(0, verifierPos).split(''), verifierPos + 1) % 11;
    return cpf[verifierPos] === String(mod < 2 ? 0 : 11 - mod);
  });

export default function isValidCpf(cpf) {
  if (!cpf) return false;

  const numericCPF = onlyNumbers(cpf);

  return isValidLength(numericCPF) && !belongsToBlacklist(numericCPF) && isValidChecksum(numericCPF);
}
