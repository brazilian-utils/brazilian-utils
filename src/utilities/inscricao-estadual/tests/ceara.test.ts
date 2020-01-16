import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Ceara', () => {
    test('when IE for Ceara is correct', () => {
      expect(isValid('CE', '853511942')).toBe(true);
    });
  });
  describe('should return false for Ceara', () => {
    test('when IE for Ceara is incorrect', () => {
      expect(isValid('CE', '853511943')).toBe(false);
      // more than 9 digits
      expect(isValid('CE', '0853511942')).toBe(false);
    });
  });
});
