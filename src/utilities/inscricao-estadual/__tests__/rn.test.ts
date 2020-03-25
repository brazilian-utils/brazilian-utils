import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for RN', () => {
    test('when IE for RN is correct', () => {
      // base rule
      expect(isValid('RN', '2007693232')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('RN', '2003569880')).toBe(true);
      // old IE
      expect(isValid('RN', '203569881')).toBe(true);
    });
  });
  describe('should return false for RN', () => {
    test('when IE for RN is incorrect', () => {
      // first verified digit incorrect
      expect(isValid('RN', '2007693231')).toBe(false);
      // does not start with 20
      expect(isValid('RN', '0203569881')).toBe(false);
      // length different from 9 or 10
      expect(isValid('RN', '20356988104')).toBe(false);
    });
  });
});
