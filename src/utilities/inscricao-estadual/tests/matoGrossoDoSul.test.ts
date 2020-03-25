import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Mato Grosso do Sul', () => {
    test('when IE for Mato Grosso do Sul is correct', () => {
      // base rule
      expect(isValid('MS', '280000006')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('MS', '280000090')).toBe(true);
      // digit 11 converted to 0
      expect(isValid('MS', '280000030')).toBe(true);
    });
  });
  describe('should return false for Mato Grosso do Sul', () => {
    test('when IE for Mato Grosso do Sul is incorrect', () => {
      // verified digit incorrect
      expect(isValid('MS', '280000031')).toBe(false);
      // length different from 9
      expect(isValid('MS', '0280000006')).toBe(false);
      // does not start with 28
      expect(isValid('MS', '853511942')).toBe(false);
    });
  });
});
