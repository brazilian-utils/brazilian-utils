import { STATES_DATA } from '../../common/states';
import { onlyNumbers } from '../../helpers';

export const VALID_AREA_CODES = Object.keys(STATES_DATA).reduce(
  (acc, state) => acc.concat((STATES_DATA as any)[state].areaCodes),
  []
) as number[];

export const PHONE_MIN_LENGTH = 10;

export const PHONE_MAX_LENGTH = 11;

export const MOBILE_VALID_FIRST_NUMBERS = [6, 7, 8, 9];

export const LANDLINE_VALID_FIRST_NUMBERS = [2, 3, 4, 5];

export function isValidDDD(phone: string): boolean {
  return VALID_AREA_CODES.includes(Number(phone.substr(0, 2)));
}

export function isValidLength(phone: string): boolean {
  return phone.length >= PHONE_MIN_LENGTH && phone.length <= PHONE_MAX_LENGTH;
}

export function isValidFirstNumber(phone: string): boolean {
  return phone.length === PHONE_MIN_LENGTH
    ? LANDLINE_VALID_FIRST_NUMBERS.includes(Number(phone.charAt(2)))
    : MOBILE_VALID_FIRST_NUMBERS.includes(Number(phone.charAt(2)));
}

export function isValid(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;

  const digits = onlyNumbers(phone);

  return isValidLength(digits) && isValidFirstNumber(digits) && isValidDDD(digits);
}
