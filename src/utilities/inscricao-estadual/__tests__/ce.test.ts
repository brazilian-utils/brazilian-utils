import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for CE', () => {
    test('when IE for CE is correct', () => {
      expect(isValid('CE', '853511942')).toBe(true);
    });
  });
  describe('should return false for CE', () => {
    test('when IE for CE is incorrect', () => {
      expect(isValid('CE', '853511943')).toBe(false);
      // more than 9 digits
      expect(isValid('CE', '0853511942')).toBe(false);
    });
  });
});
