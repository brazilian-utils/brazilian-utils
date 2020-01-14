import { isValid, VALID_AREA_CODES, PHONE_MIN_LENGTH, PHONE_MAX_LENGTH } from '.';

describe('isValid', () => {
  describe('should return false', () => {
    test('when is a empty string', () => {
      expect(isValid('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValid(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValid(undefined as any)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValid(true as any)).toBe(false);
      expect(isValid(false as any)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValid({} as any)).toBe(false);
    });

    test('when is a array', () => {
      expect(isValid([] as any)).toBe(false);
    });

    test('when is a mobile phone with mask and code state invalid', () => {
      expect(isValid('(00) 3 0000-0000')).toBe(false);
    });

    test('when is a landline with mask and code state invalid', () => {
      expect(isValid('(11) 9000-0000')).toBe(false);
    });

    test('when is a mobile phone invalid with mask', () => {
      expect(isValid('(11) 3 0000-0000')).toBe(false);
    });

    test('when is a landline invalid with mask', () => {
      expect(isValid('(11) 9000-0000')).toBe(false);
    });

    test(`when dont match with phone min length (${PHONE_MIN_LENGTH})`, () => {
      expect(isValid('11')).toBe(false);
    });

    test(`when dont match with phone max length (${PHONE_MAX_LENGTH})`, () => {
      expect(isValid('11300000001130000000')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when the ddd is valid', () => {
      VALID_AREA_CODES.forEach(code => expect(isValid(`(${code}) 9 0000-0000`)).toBe(true));
    });

    test('when is a mobile phone valid with mask', () => {
      expect(isValid('(11) 9 0000-0000')).toBe(true);
    });

    test('when is a landline valid with mask', () => {
      expect(isValid('(11) 3000-0000')).toBe(true);
    });

    test('when is a mobile phone valid without mask', () => {
      expect(isValid('11900000000')).toBe(true);
    });

    test('when is a landline valid without mask', () => {
      expect(isValid('1130000000')).toBe(true);
    });
  });
});
