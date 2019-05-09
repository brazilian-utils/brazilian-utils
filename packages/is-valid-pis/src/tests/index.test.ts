import { BLACKLIST, PIS_LENGTH } from '../constants';
import { isValidPis } from '../index';

describe('isValidPis', () => {
  describe('should return false', () => {
    test('when it is on the BLACKLIST', () => {
      BLACKLIST.forEach(cpf => expect(isValidPis(cpf)).toBe(false));
    });

    test('when is a empty string', () => {
      expect(isValidPis('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidPis(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidPis(undefined as any)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValidPis(true as any)).toBe(false);
      expect(isValidPis(false as any)).toBe(false);
    });

    test('when is an object', () => {
      expect(isValidPis({} as any)).toBe(false);
    });

    test('when is an array', () => {
      expect(isValidPis([] as any)).toBe(false);
    });

    test(`when dont match with PIS length (${PIS_LENGTH})`, () => {
      expect(isValidPis('123456')).toBe(false);
    });

    test('when contains letters or special characters', () => {
      expect(isValidPis('12056Aabb412847')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValidPis('abcabcabcde')).toBe(false);
    });

    test('when is an invalid PIS', () => {
      expect(isValidPis('12056412547')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a valid PIS without mask', () => {
      expect(isValidPis('12056412847')).toBe(true);
    });

    test('when is valid PIS with mask', () => {
      expect(isValidPis('120.5641.284-7')).toBe(true);
    });

    test('when is a valid PIS with last digit 0', () => {
      expect(isValidPis('120.1213.266-0')).toBe(true);
      expect(isValidPis('120.7041.469-0')).toBe(true);
    });
  });
});
