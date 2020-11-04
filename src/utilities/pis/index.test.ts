import { isValid, RESERVED_NUMBERS, LENGTH } from '.';

describe('isValid', () => {
  describe('should return false', () => {
    test('when it is on the RESERVED_NUMBERS', () => {
      RESERVED_NUMBERS.forEach((pis) => expect(isValid(pis)).toBe(false));
    });

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

    test('when is an object', () => {
      expect(isValid({} as any)).toBe(false);
    });

    test('when is an array', () => {
      expect(isValid([] as any)).toBe(false);
    });

    test(`when dont match with PIS length (${LENGTH})`, () => {
      expect(isValid('123456')).toBe(false);
    });

    test('when contains letters or special characters', () => {
      expect(isValid('12056Aabb412847')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValid('abcabcabcde')).toBe(false);
    });

    test('when is an invalid PIS', () => {
      expect(isValid('12056412547')).toBe(false);
      expect(isValid('12081636639')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a valid PIS without mask', () => {
      expect(isValid('12056412847')).toBe(true);
    });

    test('when is valid PIS with mask', () => {
      expect(isValid('120.5641.284-7')).toBe(true);
    });

    test('when is a valid PIS with last digit 0', () => {
      expect(isValid('120.1213.266-0')).toBe(true);
      expect(isValid('120.7041.469-0')).toBe(true);
    });
  });
});
