import isValidBoleto from '..';
import { DIGITABLE_LINE_LENGTH } from '../constants';

describe('isValidBoleto', () => {
  describe('should return false', () => {
    test('when is a empty string', () => {
      expect(isValidBoleto('')).toBe(false);
    });
    test('when is null', () => {
      expect(isValidBoleto(null)).toBe(false);
    });
    test('when is undefined', () => {
      expect(isValidBoleto(undefined)).toBe(false);
    });
    test(`when length is less than ${DIGITABLE_LINE_LENGTH}`, () => {
      expect(isValidBoleto('123456789')).toBe(false);
    });
    test('when is array', () => {
      expect(isValidBoleto([])).toBe(false);
    });
    test('when is array', () => {
      expect(isValidBoleto({})).toBe(false);
    });
    test('when is boolean', () => {
      expect(isValidBoleto(true)).toBe(false);
      expect(isValidBoleto(false)).toBe(false);
    });
  });
  describe('should return true', () => {
    test('when is a boleto valid without mask', () => {
      expect(isValidBoleto('00190000090114971860168524522114675860000102656')).toBe(true);
    });
    test('when is a boleto valid with mask', () => {
      expect(isValidBoleto('0019000009 01149.718601 68524.522114 6 75860000102656')).toBe(true);
    });
  });
  describe('should return false', () => {
    test('when check digit mod10 is invalid', () => {
      expect(isValidBoleto('00190000020114971860168524522114675860000102656')).toBe(false);
    });
    test('check digit mod11 is invalid', () => {
      expect(isValidBoleto('00190000090114971860168524522114975860000102656')).toBe(false);
    });
  });
});
