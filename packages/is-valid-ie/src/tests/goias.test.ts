
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Goias', () => {
    test('when IE for Goias is correct', () => {
      // base rule
      expect(isValidIE(STATES.GO, '109161793')).toBe(true);
      // verified digit is 1, internal
      expect(isValidIE(STATES.GO, '101031131')).toBe(true);
      // verified digit is 1, external
      expect(isValidIE(STATES.GO, '101030940')).toBe(true);
    });
  });
  describe('should return false for Goias', () => {
    test('when IE for Goias is incorrect', () => {
      // verified digit incorrect
      expect(isValidIE(STATES.GO, '109161794')).toBe(false);
      // does not start with 10,11 or 15
      expect(isValidIE(STATES.GO, '121031131')).toBe(false);
      // length different from 9
      expect(isValidIE(STATES.GO, '0101030940')).toBe(false);
    });
  });
});
