import onlyNumbers from '../../helpers/onlyNumbers';
import generateChecksum from '../../helpers/generateChecksum';

export const BLACKLIST = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
];

export const CPF_LENGTH = 11;

export const CHECK_DIGITS = [9, 10];

const isValidLength = (cpf: string) => cpf.length === CPF_LENGTH;

const belongsToBlacklist = (cpf: string) => BLACKLIST.includes(cpf);

const isValidChecksum = (cpf: string) => {
  return CHECK_DIGITS.every(verifierPos => {
    const mod =
      generateChecksum(
        cpf
          .slice(0, verifierPos)
          .split('')
          .reduce((a, b) => a + b, ''),
        verifierPos + 1
      ) % 11;

    return cpf[verifierPos] === String(mod < 2 ? 0 : 11 - mod);
  });
};

export default function isValidCpf(cpf: string) {
  if (!cpf) {
    return false;
  }

  const numericCPF = onlyNumbers(cpf);

  return (
    isValidLength(numericCPF) &&
    !belongsToBlacklist(numericCPF) &&
    isValidChecksum(numericCPF)
  );
}
