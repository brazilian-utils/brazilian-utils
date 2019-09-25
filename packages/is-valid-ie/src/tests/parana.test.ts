
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Parana', () => {
    test('when IE for Parana is correct', () => {
      // base rule
      expect(isValidIE(STATES.PR, '4447953604')).toBe(true);
    });
  });
  describe('should return false for Parana', () => {
    test('when IE for Parana is incorrect', () => {
      // length different from 10 digits
      expect(isValidIE(STATES.PR, '04447953604')).toBe(false);
      // digit incorrect
      expect(isValidIE(STATES.PR, '4447953640')).toBe(false);
    });
  });
});
