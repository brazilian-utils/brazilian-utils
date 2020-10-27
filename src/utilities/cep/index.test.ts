import { format, isValid, LENGTH } from '.';

describe('format', () => {
  test('should format CEP with mask', () => {
    expect(format('')).toBe('');
    expect(format('0')).toBe('0');
    expect(format('01')).toBe('01');
    expect(format('010')).toBe('010');
    expect(format('0100')).toBe('0100');
    expect(format('01001')).toBe('01001');
    expect(format('010010')).toBe('01001-0');
    expect(format('0100100')).toBe('01001-00');
    expect(format('01001000')).toBe('01001-000');
  });

  test(`should NOT add digits after the CEP length (${LENGTH})`, () => {
    expect(format('01001000000000')).toBe('01001-000');
  });

  test('should remove all non numeric characters', () => {
    expect(format('a0.10cr01?00#ab0')).toBe('01001-000');
  });
});

describe('isValid', () => {
  describe('should return false', () => {
    test('when it is an empty string', () => {
      expect(isValid('')).toBe(false);
    });
    test('when it is null', () => {
      expect(isValid(null as any)).toBe(false);
    });
    test('when it is undefined', () => {
      expect(isValid(undefined as any)).toBe(false);
    });
    test(`when length is greater than ${LENGTH}`, () => {
      expect(isValid('123456789')).toBe(false);
    });
    test('when is array', () => {
      expect(isValid([] as any)).toBe(false);
    });
    test('when is object', () => {
      expect(isValid({} as any)).toBe(false);
    });
    test('when is boolean', () => {
      expect(isValid(true as any)).toBe(false);
      expect(isValid(false as any)).toBe(false);
    });
  });
  describe('should return true', () => {
    test('when is a cep valid without mask', () => {
      expect(isValid('92500000')).toBe(true);
    });
    test('when is a cep valid with mask', () => {
      expect(isValid('92500-000')).toBe(true);
    });
  });
});
