
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Ceara', () => {
    test('when IE for Ceara is correct', () => {
      expect(isValidIE(STATES.CE, '853511942')).toBe(true);
    });
  });
  describe('should return false for Ceara', () => {
    test('when IE for Ceara is incorrect', () => {
      expect(isValidIE(STATES.CE, '853511943')).toBe(false);
      // more than 9 digits
      expect(isValidIE(STATES.CE, '0853511942')).toBe(false);
    });
  });
});
