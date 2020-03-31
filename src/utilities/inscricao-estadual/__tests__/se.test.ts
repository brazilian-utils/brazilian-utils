import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for SE', () => {
    test('when IE for SE is correct', () => {
      // base rule
      expect(isValid('SE', '017682606')).toBe(true);
    });
  });
});
