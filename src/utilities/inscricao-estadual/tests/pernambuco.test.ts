import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Pernambuco', () => {
    test('when IE for Pernambuco is correct', () => {
      // base rule
      expect(isValid('PE', '288625706')).toBe(true);
    });
  });
  describe('should return false for Pernambuco', () => {
    test('when IE for Pernambuco is incorrect', () => {
      // length different from 9 digits
      expect(isValid('PE', '0925870110')).toBe(false);
      // digit incorrect
      expect(isValid('PE', '925870101')).toBe(false);
    });
  });
});
