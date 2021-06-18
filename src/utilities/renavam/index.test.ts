import { isValid, LENGTH } from '.';

describe('isValid', () => {
  describe('should return false', () => {
    test('when is a empty string', () => {
      expect(isValid('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValid(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValid(undefined as any)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValid(true as any)).toBe(false);
      expect(isValid(false as any)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValid({} as any)).toBe(false);
    });

    test('when is a array', () => {
      expect(isValid([] as any)).toBe(false);
    });

    test(`when dont match with CPF length (${LENGTH})`, () => {
      expect(isValid('123456')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValid('abcabcabcde')).toBe(false);
    });

    test('when is a invalid Renavam', () => {
      expect(isValid('95965727047')).toBe(false);
    });

    test('when is a invalid Renavam test numbers with letters', () => {
      expect(isValid('foo391.838.38test0-66')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a Renavam valid without mask', () => {
      expect(isValid('95965727048')).toBe(true);
    });

    test('when is a valid Renavam with mask', () => {
      expect(isValid('9596572704-8')).toBe(true);
    });
  });
});
