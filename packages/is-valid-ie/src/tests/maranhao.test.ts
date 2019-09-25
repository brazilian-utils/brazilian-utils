
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Maranhao', () => {
    test('when IE for Maranhao is correct', () => {
      // base rule
      expect(isValidIE(STATES.MA, '120000008')).toBe(true);
      // digit 11 converted to zero
      expect(isValidIE(STATES.MA, '120000040')).toBe(true);
      // digit 10 converted to 1
      expect(isValidIE(STATES.MA, '120000130')).toBe(true);
    });
  });
  describe('should return false for Maranhao', () => {
    test('when IE for Maranhao is incorrect', () => {
      // verified digit incorrect
      expect(isValidIE(STATES.MA, '120000007')).toBe(false);
      // does not start with 12
      expect(isValidIE(STATES.MA, '109161793')).toBe(false);
      // length different from 9
      expect(isValidIE(STATES.MA, '0120000008')).toBe(false);
    });
  });
});
