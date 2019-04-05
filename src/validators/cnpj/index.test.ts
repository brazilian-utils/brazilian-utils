import { isValidCNPJ } from '..';
import { BLACKLIST, CNPJ_LENGTH } from '.';

describe('isValidCNPJ', () => {
  describe('should return false', () => {
    test('when it is on the BLACKLIST', () => {
      BLACKLIST.forEach(cnpj => expect(isValidCNPJ(cnpj)).toBe(false));
    });

    test('when is a empty string', () => {
      expect(isValidCNPJ('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidCNPJ(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidCNPJ(undefined as any)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValidCNPJ(true as any)).toBe(false);
      expect(isValidCNPJ(false as any)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValidCNPJ({} as any)).toBe(false);
    });

    test('when is a array', () => {
      expect(isValidCNPJ([] as any)).toBe(false);
    });

    test(`when dont match with CNPJ length (${CNPJ_LENGTH})`, () => {
      expect(isValidCNPJ('12312312312')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValidCNPJ('ababcabcabcdab')).toBe(false);
    });

    test('when is a CNPJ invalid', () => {
      expect(isValidCNPJ('11257245286531')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a CNPJ valid without mask', () => {
      expect(isValidCNPJ('13723705000189')).toBe(true);
    });

    test('when is a CNPJ valid with mask', () => {
      expect(isValidCNPJ('60.391.947/0001-00')).toBe(true);
    });
  });
});
