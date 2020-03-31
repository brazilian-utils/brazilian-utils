import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for MG', () => {
    test('when IE for MG is correct', () => {
      // base rule
      expect(isValid('MG', '4333908330177')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('MG', '4333908330410')).toBe(true);
      expect(isValid('MG', '7489439278602')).toBe(true);
      // digit 11 converted to 0
      expect(isValid('MG', '4333908332560')).toBe(true);
    });
  });
  describe('should return false for MG', () => {
    test('when IE for MG is incorrect', () => {
      // first verified digit incorrect
      expect(isValid('MG', '4333908330167')).toBe(false);
      // length different from 13
      expect(isValid('MG', '04333908330177')).toBe(false);
      // second verified digit incorrect
      expect(isValid('MG', '4333908330176')).toBe(false);
    });
  });
});
