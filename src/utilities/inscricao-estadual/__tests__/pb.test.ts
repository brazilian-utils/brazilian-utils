import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for PB', () => {
    test('when IE for PB is correct', () => {
      // base rule
      expect(isValid('PB', '853511942')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('PB', '853512230')).toBe(true);
      // digit 11 converted to 0
      expect(isValid('PB', '853511950')).toBe(true);
    });
  });
  describe('should return false for PB', () => {
    test('when IE for PB is incorrect', () => {
      // length different from 9
      expect(isValid('PB', '0853511942')).toBe(false);
      // digit incorrect
      expect(isValid('PB', '853511943')).toBe(false);
    });
  });
});
