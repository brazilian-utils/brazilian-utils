
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Roraima', () => {
    test('when IE for Roraima is correct', () => {
      // base rule
      expect(isValidIE(STATES.RR, '240061536')).toBe(true);
    });
  });
  describe('should return false for Roraima', () => {
    test('when IE for Roraima is incorrect', () => {
      // first verified digit incorrect
      expect(isValidIE(STATES.RR, '240061537')).toBe(false);
      // length different from 9
      expect(isValidIE(STATES.RR, '2400615366')).toBe(false);
      // does not start with 24
      expect(isValidIE(STATES.RR, '024006150')).toBe(false);
    });
  });
});
