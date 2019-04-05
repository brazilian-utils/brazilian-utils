import onlyNumbers from '../../helpers/onlyNumbers';

import {
  PHONE_MIN_LENGTH,
  PHONE_MAX_LENGTH,
  MOBILE_NUMBERS,
  LANDLINE_NUMBERS,
  WHITELIST_STATES,
} from './constants';

/**
 * Check if the length of phone number is valid.
 *
 * @param {*} phone
 */
const isValidLength = (phone: string) => {
  return phone.length >= PHONE_MIN_LENGTH && phone.length <= PHONE_MAX_LENGTH;
};

/**
 * Check if the phone is a landline or mobile valid
 * Landline numbers start with digits 2 through 5;
 * Mobile numbers start with digits 6 through 9;
 * But as of 2017 all mobile numbers in Brazil start with the digit 9.
 *
 * @param {*} phone
 * @returns
 */
const isValidNumberStart = (phone: string) => {
  if (phone.length === PHONE_MIN_LENGTH) {
    return LANDLINE_NUMBERS.includes(Number(phone.charAt(2)));
  }

  return MOBILE_NUMBERS.includes(Number(phone.charAt(2)));
};

const isValidCode = (phone: string) => {
  return WHITELIST_STATES.includes(Number(phone.substr(0, 2)));
};

/**
 * Check if the phone number is valid.
 *
 * @param {*} phone
 */
export default function isValidPhone(phone: string) {
  if (!phone) {
    return false;
  }

  const numericPhone = onlyNumbers(phone);

  return (
    isValidLength(numericPhone) &&
    isValidCode(numericPhone) &&
    isValidNumberStart(numericPhone)
  );
}
