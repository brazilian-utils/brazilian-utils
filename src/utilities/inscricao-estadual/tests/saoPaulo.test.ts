import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Sao Paulo', () => {
    test('when IE for Sao Paulo is correct', () => {
      // base rule
      expect(isValid('SP', '110042490114')).toBe(true);
    });
  });
  describe('should return false for Sao Paulo', () => {
    test('when IE for Sao Paulo is incorrect', () => {
      // length bigger than 12
      expect(isValid('SP', '1110042494114')).toBe(false);
      // second verified digit incorrect
      expect(isValid('SP', '110042490113')).toBe(false);
      // first verified digit incorrect
      expect(isValid('SP', '110042498113')).toBe(false);
    });
  });
});
