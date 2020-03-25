import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Piaui', () => {
    test('when IE for Piaui is correct', () => {
      // base rule
      expect(isValid('PI', '052364534')).toBe(true);
    });
  });
});
