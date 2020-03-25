import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for RJ', () => {
    test('when IE for RJ is correct', () => {
      // base rule
      expect(isValid('RJ', '62545372')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('RJ', '62545470')).toBe(true);
      // digit 11 converted to 0
      expect(isValid('RJ', '62545380')).toBe(true);
    });
  });
  describe('should return false for RJ', () => {
    test('when IE for RJ is incorrect', () => {
      // first verified digit incorrect
      expect(isValid('RJ', '20441620')).toBe(false);
      // length different from 8
      expect(isValid('RJ', '020441623')).toBe(false);
    });
  });
});
