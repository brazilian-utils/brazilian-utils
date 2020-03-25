import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for RR', () => {
    test('when IE for RR is correct', () => {
      // base rule
      expect(isValid('RR', '240061536')).toBe(true);
    });
  });
  describe('should return false for RR', () => {
    test('when IE for RR is incorrect', () => {
      // first verified digit incorrect
      expect(isValid('RR', '240061537')).toBe(false);
      // length different from 9
      expect(isValid('RR', '2400615366')).toBe(false);
      // does not start with 24
      expect(isValid('RR', '024006150')).toBe(false);
    });
  });
});
