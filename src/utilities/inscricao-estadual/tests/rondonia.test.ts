import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Rondonia', () => {
    test('when IE for Rondonia is correct', () => {
      // base rule
      expect(isValid('RO', '01078042249629')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('RO', '01078042249670')).toBe(true);
      // digit 11 converted to 0
      expect(isValid('RO', '01078042249751')).toBe(true);
    });
  });
  describe('should return false for Rondonia', () => {
    test('when IE for Rondonia is incorrect', () => {
      // first verified digit incorrect
      expect(isValid('RO', '01078042249756')).toBe(false);
      // length different from 14
      expect(isValid('RO', '001078042249627')).toBe(false);
    });
  });
});
