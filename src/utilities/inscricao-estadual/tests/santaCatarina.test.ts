import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Santa Catarina', () => {
    test('when IE for Santa Catarina is correct', () => {
      // base rule
      expect(isValid('SC', '330430572')).toBe(true);
    });
  });
});
