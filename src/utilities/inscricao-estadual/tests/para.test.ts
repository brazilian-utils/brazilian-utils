import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Para', () => {
    test('when IE for Para is correct', () => {
      // base rule
      expect(isValid('PA', '150000006')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('PA', '150000260')).toBe(true);
      // digit 11 converted to 0
      expect(isValid('PA', '150000030')).toBe(true);
    });
  });
  describe('should return false for Para', () => {
    test('when IE for Para is incorrect', () => {
      // does not start with 15
      expect(isValid('PA', '120000008')).toBe(false);
      // length different from 9
      expect(isValid('PA', '0150000006')).toBe(false);
      // digit incorrect
      expect(isValid('PA', '150000007')).toBe(false);
    });
  });
});
