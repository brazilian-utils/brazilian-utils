import isValidPhone from '..';
import { WHITELIST_STATES, PHONE_MIN_LENGTH, PHONE_MAX_LENGTH } from '../constants';

describe('isValidPhone', () => {
  describe('should return false', () => {
    test('when is a mobile phone with mask and code state invalid', () => {
      expect(isValidPhone('(00) 3 0000-0000')).toBe(false);
    });

    test('when is a landline with mask and code state invalid', () => {
      expect(isValidPhone('(11) 9000-0000')).toBe(false);
    });

    test('when is a mobile phone invalid with mask', () => {
      expect(isValidPhone('(11) 3 0000-0000')).toBe(false);
    });

    test('when is a landline invalid with mask', () => {
      expect(isValidPhone('(11) 9000-0000')).toBe(false);
    });

    test(`when dont match with Phone min length (${PHONE_MIN_LENGTH})`, () => {
      expect(isValidPhone('11')).toBe(false);
    });

    test(`when dont match with Phone max length (${PHONE_MAX_LENGTH})`, () => {
      expect(isValidPhone('11300000001130000000')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when the code is on the WHITELIST of states', () => {
      WHITELIST_STATES.forEach(code => expect(isValidPhone(`(${code}) 9 0000-0000`)).toBe(true));
    });

    test('when is a mobile phone valid with mask', () => {
      expect(isValidPhone('(11) 9 0000-0000')).toBe(true);
    });

    test('when is a landline valid with mask', () => {
      expect(isValidPhone('(11) 3000-0000')).toBe(true);
    });

    test('when is a mobile phone valid without mask', () => {
      expect(isValidPhone('11900000000')).toBe(true);
    });

    test('when is a landline valid without mask', () => {
      expect(isValidPhone('1130000000')).toBe(true);
    });
  });
});
