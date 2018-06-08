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

const isValidLength = (cpf) => cpf.length === 11;

const belongsToBlacklist = (cpf) => BLACKLIST.includes(cpf);

const calculateMod = (cpf) => {
  let sequence = cpf.length + 1;

  const mod = cpf.split('').reduce((acc, number) => acc + (number * sequence--), 0) % 11;

  return (mod < 2 ? 0 : 11 - mod);
}

const isValidFirstCheckDigit = (cpf) => cpf[9] == calculateMod(cpf.slice(0, 9));

const isValidSecondCheckDigit = (cpf) => cpf[10] == calculateMod(cpf.slice(0, 10));

const normalize = (cpf) => cpf.replace(/[^\d]/g, '');

export default function isValidCpf(cpf) {
  if (!cpf) return false;

  const normalizedCpf = normalize(cpf);

  return isValidLength(normalizedCpf) && !belongsToBlacklist(normalizedCpf) && isValidFirstCheckDigit(normalizedCpf) && isValidSecondCheckDigit(normalizedCpf);
}
