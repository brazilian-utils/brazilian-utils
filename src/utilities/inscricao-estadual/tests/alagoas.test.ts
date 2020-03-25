import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Alagoas', () => {
    test('when IE for Alagoas is correct', () => {
      expect(isValid('AL', '248659758')).toBe(true);
      // digit 10 converted to 0
      expect(isValid('AL', '247424170')).toBe(true);
    });
  });
  describe('should return false for Alagoas', () => {
    test('when IE for Alagoas is incorrect', () => {
      // incorrect verified digit
      expect(isValid('AL', '248659759')).toBe(false);
      // it does not starts with 24
      expect(isValid('AL', '258659750')).toBe(false);
      // lenght more then 9
      expect(isValid('AL', '2486597584')).toBe(false);
    });
  });
});
