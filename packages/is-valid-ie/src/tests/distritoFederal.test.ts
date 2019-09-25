
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Distrito Federal', () => {
    test('when IE for Distrito Federal is correct', () => {
      expect(isValidIE(STATES.DF, '0754002000176')).toBe(true);
      // tenth digit converted to 0
      expect(isValidIE(STATES.DF, '0754002000508')).toBe(true);
    });
  });
  describe('should return false for Distrito Federal', () => {
    test('when IE for Distrito Federal is incorrect', () => {
      // does not start with 07
      expect(isValidIE(STATES.DF, '0108368143017')).toBe(false);
      // does not have 13 digits
      expect(isValidIE(STATES.DF, '07008368143094')).toBe(false);
      // digit incorrect
      expect(isValidIE(STATES.DF, '0754002000175')).toBe(false);
    });
  });
});
