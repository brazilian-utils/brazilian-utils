import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Mato Grosso', () => {
    test('when IE for Mato Grosso is correct', () => {
      // base rule
      expect(isValid('MT', '60474120469')).toBe(true);
    });
  });
  describe('should return false for Mato Grosso', () => {
    test('when IE for Mato Grosso is incorrect', () => {
      // verified digit incorrect
      expect(isValid('MT', '12345678901')).toBe(false);
      // length different from 11
      expect(isValid('MT', '1234567890112')).toBe(false);
    });
  });
});
