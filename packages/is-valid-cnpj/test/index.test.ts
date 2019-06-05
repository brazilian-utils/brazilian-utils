import isValidCnpj, { RESERVED_ENTRIES, LENGTH } from '../src';

describe('isValidCnpj', () => {
  describe('should return false', () => {
    test('when it is on the RESERVED_ENTRIES', () => {
      RESERVED_ENTRIES.forEach(str => expect(isValidCnpj(str)).toBe(false));
    });

    test('when is a empty string', () => {
      expect(isValidCnpj('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidCnpj(null)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidCnpj(undefined)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValidCnpj(true as any)).toBe(false);
      expect(isValidCnpj(false as any)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValidCnpj({} as any)).toBe(false);
    });

    test('when is a array', () => {
      expect(isValidCnpj([] as any)).toBe(false);
    });

    test(`when dont match with CNPJ length (${LENGTH})`, () => {
      expect(isValidCnpj('12312312312')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValidCnpj('ababcabcabcdab')).toBe(false);
    });

    test('when is a CNPJ invalid test numbers with letters', () => {
      expect(isValidCnpj('6ad0.t391.9asd47/0ad001-00')).toBe(false);
    });

    test('when is a CNPJ invalid', () => {
      expect(isValidCnpj('11257245286531')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a CNPJ valid without mask', () => {
      expect(isValidCnpj('13723705000189')).toBe(true);
    });

    test('when is a CNPJ valid with mask', () => {
      expect(isValidCnpj('60.391.947/0001-00')).toBe(true);
    });
  });
});
