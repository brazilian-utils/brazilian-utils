import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for MT', () => {
    test('when IE for MT is correct', () => {
      // base rule
      expect(isValid('MT', '60474120469')).toBe(true);
    });
  });
  describe('should return false for MT', () => {
    test('when IE for MT is incorrect', () => {
      // verified digit incorrect
      expect(isValid('MT', '12345678901')).toBe(false);
      // length different from 11
      expect(isValid('MT', '1234567890112')).toBe(false);
    });
  });
});
