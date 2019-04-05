import { isValidCEP } from '..';
import { CEP_LENGTH } from '.';

describe('isValidCEP', () => {
  describe('should return false', () => {
    test('when is a empty string', () => {
      expect(isValidCEP('')).toBe(false);
    });
    test('when is null', () => {
      expect(isValidCEP(null as any)).toBe(false);
    });
    test('when is undefined', () => {
      expect(isValidCEP(undefined as any)).toBe(false);
    });
    test(`when length is greater than ${CEP_LENGTH}`, () => {
      expect(isValidCEP('123456789')).toBe(false);
    });
    test('when is array', () => {
      expect(isValidCEP([] as any)).toBe(false);
    });
    test('when is array', () => {
      expect(isValidCEP({} as any)).toBe(false);
    });
    test('when is boolean', () => {
      expect(isValidCEP(true as any)).toBe(false);
      expect(isValidCEP(false as any)).toBe(false);
    });
  });
  describe('should return true', () => {
    test('when is a cep valid without mask', () => {
      expect(isValidCEP('92500000')).toBe(true);
    });
    test('when is a cep valid with mask', () => {
      expect(isValidCEP('92500-000')).toBe(true);
    });
  });
});
