
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Espirito Santo', () => {
    test('when IE for Espirito Santo is correct', () => {
      expect(isValidIE(STATES.ES, '639191444')).toBe(true);
    });
  });
  describe('should return false for Espirito Santo', () => {
    test('when IE for Espitiro Santo is incorrect', () => {
      expect(isValidIE(STATES.ES, '639191445')).toBe(false);
      // more than 9 digits
      expect(isValidIE(STATES.ES, '0639191444')).toBe(false);
    });
  });
});
