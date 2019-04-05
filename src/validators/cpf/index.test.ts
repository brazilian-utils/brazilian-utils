import { isValidCPF } from '..';
import { BLACKLIST, CPF_LENGTH } from '.';

describe('isValidCPF', () => {
  describe('should return false', () => {
    test('when it is on the BLACKLIST', () => {
      BLACKLIST.forEach(cpf => expect(isValidCPF(cpf)).toBe(false));
    });

    test('when is a empty string', () => {
      expect(isValidCPF('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidCPF(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidCPF(undefined as any)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValidCPF(true as any)).toBe(false);
      expect(isValidCPF(false as any)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValidCPF({} as any)).toBe(false);
    });

    test('when is a array', () => {
      expect(isValidCPF([] as any)).toBe(false);
    });

    test(`when dont match with CPF length (${CPF_LENGTH})`, () => {
      expect(isValidCPF('123456')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValidCPF('abcabcabcde')).toBe(false);
    });

    test('when is a CPF invalid', () => {
      expect(isValidCPF('11257245286')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a CPF valid without mask', () => {
      expect(isValidCPF('40364478829')).toBe(true);
    });

    test('when is a CPF valid with mask', () => {
      expect(isValidCPF('962.718.458-60')).toBe(true);
    });
  });
});
