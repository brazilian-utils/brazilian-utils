// Tests created using the following links as reference:
// https://help.returnpath.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-
// https://stackoverflow.com/questions/2049502/what-characters-are-allowed-in-an-email-address

import { isValid } from '.';

describe('isValid', () => {
  describe('should return false', () => {
    test('when it is an empty string', () => {
      expect(isValid('')).toBe(false);
    });

    test('when it is null', () => {
      expect(isValid(null as any)).toBe(false);
    });

    test('when it is undefined', () => {
      expect(isValid(undefined as any)).toBe(false);
    });

    test('when it is a boolean', () => {
      expect(isValid(true as any)).toBe(false);
      expect(isValid(false as any)).toBe(false);
    });

    test('when it is an object', () => {
      expect(isValid({} as any)).toBe(false);
    });

    test('when it is an array', () => {
      expect(isValid([] as any)).toBe(false);
    });
    test('when brazilian license plate format is invalid', () => {
      expect(isValid('abc12345')).toBe(false);
      expect(isValid('5abc1234')).toBe(false);
      expect(isValid('abcd1234')).toBe(false);
      expect(isValid('abcd234')).toBe(false);
    });
  });
  describe('should return true', () => {
    test('when brazilian license plate format is valid', () => {
      expect(isValid('abc1234')).toBe(true);
      expect(isValid('ABC1234')).toBe(true);
      expect(isValid('abc-1234')).toBe(true);
      expect(isValid('ABC-1234')).toBe(true);
    });
    test('when mercosul license plate format is valid', () => {
      expect(isValid('abc1d23')).toBe(true);
      expect(isValid('ABC1D23')).toBe(true);
    });
  });
});
