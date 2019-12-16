import { onlyNumbers } from '../../helpers';

export const LENGTH = 8;

function isValidLength(cep: string) {
  return cep.length === LENGTH;
}

export function isValid(cep: string) {
  if (!cep || typeof cep !== 'string') return false;

  const digits = onlyNumbers(cep);

  return isValidLength(digits);
}
