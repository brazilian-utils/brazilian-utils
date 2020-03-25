import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Espirito Santo', () => {
    test('when IE for Espirito Santo is correct', () => {
      expect(isValid('ES', '639191444')).toBe(true);
    });
  });
  describe('should return false for Espirito Santo', () => {
    test('when IE for Espitiro Santo is incorrect', () => {
      expect(isValid('ES', '639191445')).toBe(false);
      // more than 9 digits
      expect(isValid('ES', '0639191444')).toBe(false);
    });
  });
});
