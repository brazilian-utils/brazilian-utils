import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for PI', () => {
    test('when IE for PI is correct', () => {
      // base rule
      expect(isValid('PI', '052364534')).toBe(true);
    });
  });
});
