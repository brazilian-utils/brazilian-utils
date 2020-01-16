import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Sergipe', () => {
    test('when IE for Sergipe is correct', () => {
      // base rule
      expect(isValid('SE', '017682606')).toBe(true);
    });
  });
});
