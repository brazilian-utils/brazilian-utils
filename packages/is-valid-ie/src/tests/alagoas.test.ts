
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Alagoas', () => {
    test('when IE for Alagoas is correct', () => {
      expect(isValidIE(STATES.AL, '248659758')).toBe(true);
      // Dígito 10 convertido para 0
      expect(isValidIE(STATES.AL, '247424170')).toBe(true);
    });
  });
  describe('should return false for Alagoas', () => {
    test('when IE for Alagoas is incorrect', () => {
      // Dígito verificador incorreto
      expect(isValidIE(STATES.AL, '248659759')).toBe(false);
      // Não começa com 24
      expect(isValidIE(STATES.AL, '258659750')).toBe(false);
      // Não tem 9 digitos
      expect(isValidIE(STATES.AL, '2486597584')).toBe(false);
    });
  });
});
