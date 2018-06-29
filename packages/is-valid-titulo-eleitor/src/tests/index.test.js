import isValidTituloEleitor from '../';
import { BLACKLIST, TITULO_ELEITOR_LENGTH } from '../constants';

describe('isValidTituloEleitor', () => {
  describe('should return false', () => {
    test('when it is on the BLACKLIST', () => {
      BLACKLIST.forEach(tituloEleitor => expect(isValidTituloEleitor(tituloEleitor)).toBe(false));
    });

    test('when is a empty string', () => {
      expect(isValidTituloEleitor('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidTituloEleitor(null)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidTituloEleitor(undefined)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValidTituloEleitor(true)).toBe(false);
      expect(isValidTituloEleitor(false)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValidTituloEleitor({})).toBe(false);
    });

    test('when is a array', () => {
      expect(isValidTituloEleitor([])).toBe(false);
    });

    test(`when dont match with Título de Eleitor length (${TITULO_ELEITOR_LENGTH})`, () => {
      expect(isValidTituloEleitor('123456')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValidTituloEleitor('abcabcabcde')).toBe(false);
    });

    test('when is a Título de Eleitor invalid', () => {
      expect(isValidTituloEleitor('11257245286')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a Título de Eleitor valid without mask', () => {
      expect(isValidTituloEleitor('40364478829')).toBe(true);
    });

    test('when is a Título de Eleitor valid with mask', () => {
      expect(isValidTituloEleitor('962.718.458-60')).toBe(true);
    });
  });
});
