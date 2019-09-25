
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Acre', () => {
    test('when IE for Acre is correct', () => {
      expect(isValidIE(STATES.AC, '0108368143106')).toBe(true);
      expect(isValidIE(STATES.AC, '01.349.541/474-57')).toBe(true);
    });
  });
  describe('should return false for Acre', () => {
    test('when IE for Acre is incorrect', () => {
      // segundo digito verificador incorreto.
      expect(isValidIE(STATES.AC, '0187634580933')).toBe(false);
      // Primeiro dígito verificador incorreto.
      expect(isValidIE(STATES.AC, '0187634580924')).toBe(false);
      // Não começa com 01
      expect(isValidIE(STATES.AC, '0018763458000')).toBe(false);
      // Maior que 13 dígitos
      expect(isValidIE(STATES.AC, '01018763458064')).toBe(false);
    });
  });
});
