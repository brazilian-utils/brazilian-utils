import { format, isValid, LENGTH, RESERVED_NUMBERS } from '.';

describe('isValid', () => {
  describe('should return false', () => {
    test('when it is on the RESERVED_NUMBERS', () => {
      RESERVED_NUMBERS.forEach((pis) => expect(isValid(pis)).toBe(false));
    });

    test('when it is an empty string', () => {
      expect(isValid('')).toBe(false);
    });

    test('when it is null', () => {
      expect(isValid(null as any)).toBe(false);
    });

    test('when it is undefined', () => {
      expect(isValid(undefined as any)).toBe(false);
    });

    test('when it is a boolean', () => {
      expect(isValid(true as any)).toBe(false);
      expect(isValid(false as any)).toBe(false);
    });

    test('when is an object', () => {
      expect(isValid({} as any)).toBe(false);
    });

    test('when is an array', () => {
      expect(isValid([] as any)).toBe(false);
    });

    test(`when don't match with PIS length (${LENGTH})`, () => {
      expect(isValid('123456')).toBe(false);
    });

    test('when contains letters or special characters', () => {
      expect(isValid('12056Aabb412847')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValid('abcabcabcde')).toBe(false);
    });

    test('when is an invalid PIS', () => {
      expect(isValid('12056412547')).toBe(false);
      expect(isValid('12081636639')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a valid PIS without mask', () => {
      expect(isValid('12056412847')).toBe(true);
    });

    test('when is valid PIS with mask', () => {
      expect(isValid('120.5641.284-7')).toBe(true);
    });

    test('when is a valid PIS with last digit 0', () => {
      expect(isValid('120.1213.266-0')).toBe(true);
      expect(isValid('120.7041.469-0')).toBe(true);
    });
  });
});

describe('format', () => {
  describe('should format pis', () => {
    it('when it is a no formatted string', () => {
      expect(format('')).toBe('');
      expect(format('0')).toBe('0');
      expect(format('00')).toBe('00');
      expect(format('000')).toBe('000');
      expect(format('0000')).toBe('000.0');
      expect(format('00000')).toBe('000.00');
      expect(format('000000')).toBe('000.000');
      expect(format('0000000')).toBe('000.0000');
      expect(format('00000000')).toBe('000.00000');
      expect(format('000000000')).toBe('000.00000.0');
      expect(format('0000000000')).toBe('000.00000.00');
      expect(format('00000000000')).toBe('000.00000.00-0');
      expect(format('000000000000')).toBe('000.00000.00-0');
    });

    it('when it is a formatted string', () => {
      expect(format('000.0')).toBe('000.0');
      expect(format('000.00')).toBe('000.00');
      expect(format('000.000')).toBe('000.000');
      expect(format('000.0000')).toBe('000.0000');
      expect(format('000.00000')).toBe('000.00000');
      expect(format('000.000000')).toBe('000.00000.0');
      expect(format('000.00000.0')).toBe('000.00000.0');
      expect(format('000.00000.00')).toBe('000.00000.00');
      expect(format('000.00000.000')).toBe('000.00000.00-0');
      expect(format('000.00000.00-0')).toBe('000.00000.00-0');
      expect(format('000.00000.00-00')).toBe('000.00000.00-0');
    });

    it('when it is a malformed string', () => {
      expect(format('000#Error*&@#0000#Char!00000')).toBe('000.00000.00-0');
      expect(format('#-+Error#000000000000#Char!')).toBe('000.00000.00-0');
      expect(format('000000#+_Error#Char!$#000000')).toBe('000.00000.00-0');
    });

    it('when it is a integer number', () => {
      expect(format(1)).toBe('1');
      expect(format(10)).toBe('10');
      expect(format(100)).toBe('100');
      expect(format(1000)).toBe('100.0');
      expect(format(10000)).toBe('100.00');
      expect(format(100000)).toBe('100.000');
      expect(format(1000000)).toBe('100.0000');
      expect(format(10000000)).toBe('100.00000');
      expect(format(100000000)).toBe('100.00000.0');
      expect(format(1000000000)).toBe('100.00000.00');
      expect(format(10000000000)).toBe('100.00000.00-0');
      expect(format(100000000000)).toBe('100.00000.00-0');
      expect(format(1000000000000)).toBe('100.00000.00-0');
    });

    it('when it is a float number', () => {
      expect(format(1)).toBe('1');
      expect(format(10)).toBe('10');
      expect(format(100)).toBe('100');
      expect(format(100.1)).toBe('100.1');
      expect(format(100.11)).toBe('100.11');
      expect(format(100.101)).toBe('100.101');
      expect(format(100.1001)).toBe('100.1001');
      expect(format(100.10001)).toBe('100.10001');
      expect(format(100.100001)).toBe('100.10000.1');
      expect(format(100.1000001)).toBe('100.10000.01');
      expect(format(100.10000001)).toBe('100.10000.00-1');
      expect(format(100.100000001)).toBe('100.10000.00-0');
    });
  });
});
