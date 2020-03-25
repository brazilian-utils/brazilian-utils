import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Tocantins', () => {
    test('when IE for Tocantins is correct', () => {
      // OLD base rule
      expect(isValid('TO', '01027737427')).toBe(true);

      // NEW base rule
      expect(isValid('TO', '294467696')).toBe(true);

      // Digit zero
      expect(isValid('TO', '294150870')).toBe(true);
    });
  });
  describe('should return false for Tocantins', () => {
    test('when IE for Tocantins is incorrect', () => {
      // Old rule category invalid
      expect(isValid('TO', '01047737427')).toBe(false);

      // more than 11 digits
      expect(isValid('TO', '099999916599')).toBe(false);

      // verified digit incorrect
      expect(isValid('TO', '99999916598')).toBe(false);

      // new rule verified digit incorrect
      expect(isValid('TO', '294467690')).toBe(false);
    });
  });
});
