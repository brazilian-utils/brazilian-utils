import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import generateChecksum from '@brazilian-utils/helper-generate-checksum';

import { BLACKLIST, CPF_LENGTH, CHECK_DIGITS } from './constants';

const isValidLength = (cpf: string) => cpf.length === CPF_LENGTH;

const cpfWithDotsAndHyphenIsValid = (cpf: string) => /\d{3}.\d{3}.\d{3}-\d{2}/g.test(cpf)

const belongsToBlacklist = (cpf: string) => BLACKLIST.includes(cpf);

const isValidChecksum = (cpf: string) =>
  CHECK_DIGITS.every(verifierPos => {
    const mod = generateChecksum(cpf.slice(0, verifierPos).split('').reduce((a, b) => a + b, ''), verifierPos + 1) % 11;
    return cpf[verifierPos] === String(mod < 2 ? 0 : 11 - mod);
  });

const testOnlyNumbers = (v: string) => /^\d+$/.test(v);

const validateCpfOnlyNumbers = (cpf: string) => {

  if (!testOnlyNumbers(cpf)) return false

  const numericCPF = onlyNumbers(cpf);

  return isValidLength(numericCPF) && !belongsToBlacklist(numericCPF) && isValidChecksum(numericCPF);
}

const validateCpfWithDotsAndHyphen = (cpf: string) => {

  const numericCPF = onlyNumbers(cpf);

  return cpfWithDotsAndHyphenIsValid(cpf)
    && isValidLength(numericCPF)
    && !belongsToBlacklist(numericCPF)
    && isValidChecksum(numericCPF);
}


export default function isValidCpf(cpf: string) {

  if (!cpf) return false;

  return cpfWithDotsAndHyphenIsValid(cpf) ? validateCpfWithDotsAndHyphen(cpf) : validateCpfOnlyNumbers(cpf)
}
