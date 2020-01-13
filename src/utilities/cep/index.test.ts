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
    test(`when length is greater than ${LENGTH}`, () => {
      expect(isValid('123456789')).toBe(false);
    });
    test('when is array', () => {
      expect(isValid([] as any)).toBe(false);
    });
    test('when is object', () => {
      expect(isValid({} as any)).toBe(false);
    });
    test('when is boolean', () => {
      expect(isValid(true as any)).toBe(false);
      expect(isValid(false as any)).toBe(false);
    });
  });
  describe('should return true', () => {
    test('when is a cep valid without mask', () => {
      expect(isValid('92500000')).toBe(true);
    });
    test('when is a cep valid with mask', () => {
      expect(isValid('92500-000')).toBe(true);
    });
  });
});
