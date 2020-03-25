import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for ES', () => {
    test('when IE for ES is correct', () => {
      expect(isValid('ES', '639191444')).toBe(true);
    });
  });
  describe('should return false for ES', () => {
    test('when IE for ES is incorrect', () => {
      expect(isValid('ES', '639191445')).toBe(false);
      // more than 9 digits
      expect(isValid('ES', '0639191444')).toBe(false);
    });
  });
});
