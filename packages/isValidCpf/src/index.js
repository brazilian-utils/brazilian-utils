const BLACKLIST = [
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

const CPF_LENGTH = 11;

const CHECK_DIGITS = [9, 10];

const isValidLength = (cpf) => cpf.length === CPF_LENGTH;

const belongsToBlacklist = (cpf) => BLACKLIST.includes(cpf);

const isValidChecksum = (cpf) => CHECK_DIGITS.every((index) => {
  const digits = cpf.slice(0, index).split('');

  let weight = digits.length + 1;

  const mod = digits.reduce((acc, digit) => acc + (digit * weight--), 0) % 11;

  return cpf[index] == (mod < 2 ? 0 : 11 - mod);
});

const normalize = (cpf) => String(cpf).replace(/[^\d]/g, '');

export default function isValidCpf(cpf) {
  if (!cpf) return false;

  const normalizedCpf = normalize(cpf);

  return isValidLength(normalizedCpf) && !belongsToBlacklist(normalizedCpf) && isValidChecksum(normalizedCpf);
}
