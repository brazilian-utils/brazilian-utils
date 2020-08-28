import { isValid } from '.';

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

    test(`when dont match with CPF length`, () => {
      expect(isValid('IWH-86288')).toBe(false);
    });

    test('when contains only letters', () => {
      expect(isValid('IWH')).toBe(false);
    });

    test('when contains only numbers', () => {
      expect(isValid('8628')).toBe(false);
    });

    test('when is invalid mercosul plate', () => {
      expect(isValid('IWH-8628', { mercosul: true })).toBe(false);
    });

    test('when is invalid motorcycle mercosul plate', () => {
      expect(isValid('AAA-1A11', { mercosul: true, motorcycle: true })).toBe(false);
    });

    test('when options params is not pass in mercosul plate', () => {
      expect(isValid('AAA-1A11')).toBe(false);
    });

    test('when options params is not pass in motorcycle mercosul plate', () => {
      expect(isValid('AAA-11A1', { mercosul: true })).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a valid plate without mask', () => {
      expect(isValid('IWH8628')).toBe(true);
    });

    test('when is a valid plate with mask', () => {
      expect(isValid('IWH-8628')).toBe(true);
    });

    test('when is a valid mercosul plate', () => {
      expect(isValid('AAA-1A11', { mercosul: true })).toBe(true);
    });

    test('when is a valid motorcycle mercosul plate', () => {
      expect(isValid('AAA-11A1', { mercosul: true, motorcycle: true })).toBe(true);
    });

    test('when is a valid mercosul plate without mask', () => {
      expect(isValid('AAA1A11', { mercosul: true })).toBe(true);
    });

    test('when is a valid motorcycle mercosul plate without mask', () => {
      expect(isValid('AAA11A1', { mercosul: true, motorcycle: true })).toBe(true);
    });
  });
});
