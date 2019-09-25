
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Rondonia', () => {
    test('when IE for Rondonia is correct', () => {
      // base rule
      expect(isValidIE(STATES.RO, '01078042249629')).toBe(true);
      // digit 10 converted to 0
      expect(isValidIE(STATES.RO, '01078042249670')).toBe(true);
      // digit 11 converted to 0
      expect(isValidIE(STATES.RO, '01078042249751')).toBe(true);
    });
  });
  describe('should return false for Rondonia', () => {
    test('when IE for Rondonia is incorrect', () => {
      // first verified digit incorrect
      expect(isValidIE(STATES.RO, '01078042249756')).toBe(false);
      // length different from 14
      expect(isValidIE(STATES.RO, '001078042249627')).toBe(false);
    });
  });
});
