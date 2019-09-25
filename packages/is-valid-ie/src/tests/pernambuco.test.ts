
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Pernambuco', () => {
    test('when IE for Pernambuco is correct', () => {
      // base rule
      expect(isValidIE(STATES.PE, '288625706')).toBe(true);
    });
  });
  describe('should return false for Pernambuco', () => {
    test('when IE for Pernambuco is incorrect', () => {
      // length different from 9 digits
      expect(isValidIE(STATES.PE, '0925870110')).toBe(false);
      // digit incorrect
      expect(isValidIE(STATES.PE, '925870101')).toBe(false);
    });
  });
});
