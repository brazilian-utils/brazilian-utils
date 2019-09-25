
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Tocantins', () => {
    test('when IE for Tocantins is correct', () => {
      // OLD base rule
      expect(isValidIE(STATES.TO, '01027737427')).toBe(true);

      // NEW base rule
      expect(isValidIE(STATES.TO, '294467696')).toBe(true);

      // Digit zero
      expect(isValidIE(STATES.TO, '294150870')).toBe(true);
    });
  });
  describe('should return false for Tocantins', () => {
    test('when IE for Tocantins is incorrect', () => {
      // Old rule category invalid
      expect(isValidIE(STATES.TO, '01047737427')).toBe(false);

      // more than 11 digits
      expect(isValidIE(STATES.TO, '099999916599')).toBe(false);

      // verified digit incorrect
      expect(isValidIE(STATES.TO, '99999916598')).toBe(false);

      // new rule verified digit incorrect
      expect(isValidIE(STATES.TO, '294467690')).toBe(false);
    });
  });
});
