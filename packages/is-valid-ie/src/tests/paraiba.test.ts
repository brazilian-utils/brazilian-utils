
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Paraiba', () => {
    test('when IE for Paraiba is correct', () => {
      // base rule
      expect(isValidIE(STATES.PB, '853511942')).toBe(true);
      // digit 10 converted to 0
      expect(isValidIE(STATES.PB, '853512230')).toBe(true);
      // digit 11 converted to 0
      expect(isValidIE(STATES.PB, '853511950')).toBe(true);
    });
  });
  describe('should return false for Paraiba', () => {
    test('when IE for Paraiba is incorrect', () => {
      // length different from 9
      expect(isValidIE(STATES.PB, '0853511942')).toBe(false);
      // digit incorrect
      expect(isValidIE(STATES.PB, '853511943')).toBe(false);
    });
  });
});
