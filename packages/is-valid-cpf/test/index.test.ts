import { isValidCpf } from '../src';
import { RESERVED_ENTRIES, TAXID_LENGTH } from '../src/constants';

describe('isValidCpf', () => {
  describe('should return false', () => {
    test('when it is on the RESERVED_ENTRIES', () => {
      RESERVED_ENTRIES.forEach(cpf => expect(isValidCpf(cpf)).toBe(false));
    });

    test('when is a empty string', () => {
      expect(isValidCpf('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidCpf(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidCpf(undefined as any)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValidCpf(true as any)).toBe(false);
      expect(isValidCpf(false as any)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValidCpf({} as any)).toBe(false);
    });

    test('when is a array', () => {
      expect(isValidCpf([] as any)).toBe(false);
    });

    test(`when dont match with CPF length (${TAXID_LENGTH})`, () => {
      expect(isValidCpf('123456')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValidCpf('abcabcabcde')).toBe(false);
    });

    test('when is a CPF invalid', () => {
      expect(isValidCpf('11257245286')).toBe(false);
    });

    test('when is a CPF invalid test numbers with letters', () => {
      expect(isValidCpf('foo391.838.38test0-66')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a CPF valid without mask', () => {
      expect(isValidCpf('40364478829')).toBe(true);
    });

    test('when is a CPF valid with mask', () => {
      expect(isValidCpf('962.718.458-60')).toBe(true);
    });
  });
});
