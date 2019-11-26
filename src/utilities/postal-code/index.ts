import { onlyNumbers } from '../../helpers';

export const LENGTH = 8;

function isValidLength(postalCode: string) {
  return postalCode.length === LENGTH;
}

export function isValid(postalCode: string) {
  if (!postalCode || typeof postalCode !== 'string') return false;

  const digits = onlyNumbers(postalCode);

  return isValidLength(digits);
}
