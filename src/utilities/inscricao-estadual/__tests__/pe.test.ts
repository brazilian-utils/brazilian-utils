import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for PE', () => {
    test('when IE for PE is correct', () => {
      // base rule
      expect(isValid('PE', '288625706')).toBe(true);
    });
  });
  describe('should return false for PE', () => {
    test('when IE for PE is incorrect', () => {
      // length different from 9 digits
      expect(isValid('PE', '0925870110')).toBe(false);
      // digit incorrect
      expect(isValid('PE', '925870101')).toBe(false);
    });
  });
});
