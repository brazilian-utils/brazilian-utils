import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Rio Grande do Sul', () => {
    test('when IE for Rio Grande do Sul is correct', () => {
      // base rule
      expect(isValid('RS', '0305169149')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('RS', '1202762660')).toBe(true);
      // digit 11 converted to 0
      expect(isValid('RS', '1202762120')).toBe(true);
    });
  });
  describe('should return false for Rio Grande do Sul', () => {
    test('when IE for Rio Grande do Sul is incorrect', () => {
      // first verified digit incorrect
      expect(isValid('RS', '2007693232')).toBe(false);
      // length different from 10
      expect(isValid('RS', '02007693230')).toBe(false);
    });
  });
});
