import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for AC', () => {
    test('when IE for AC is correct', () => {
      expect(isValid('AC', '0108368143106')).toBe(true);
      expect(isValid('AC', '01.349.541/474-57')).toBe(true);
    });
  });
  describe('should return false for AC', () => {
    test('when IE for AC is incorrect', () => {
      // incorrect second digit
      expect(isValid('AC', '0187634580933')).toBe(false);
      // incorrect first digit.
      expect(isValid('AC', '0187634580924')).toBe(false);
      // it does not starts with 01
      expect(isValid('AC', '0018763458000')).toBe(false);
      // length bigger then 13
      expect(isValid('AC', '01018763458064')).toBe(false);
    });
  });
});
