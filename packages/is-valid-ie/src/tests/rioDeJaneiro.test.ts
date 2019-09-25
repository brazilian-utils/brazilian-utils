
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Rio de Janeiro', () => {
    test('when IE for Rio de Janeiro is correct', () => {
      // base rule
      expect(isValidIE(STATES.RJ, '62545372')).toBe(true);
      // digit 10 converted to 0
      expect(isValidIE(STATES.RJ, '62545470')).toBe(true);
      // digit 11 converted to 0
      expect(isValidIE(STATES.RJ, '62545380')).toBe(true);
    });
  });
  describe('should return false for Rio de Janeiro', () => {
    test('when IE for Rio de Janeiro is incorrect', () => {
      // first verified digit incorrect
      expect(isValidIE(STATES.RJ, '20441620')).toBe(false);
      // length different from 8
      expect(isValidIE(STATES.RJ, '020441623')).toBe(false);
    });
  });
});
