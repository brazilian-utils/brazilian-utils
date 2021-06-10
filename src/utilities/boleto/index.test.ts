import { isValid, format, getValueInCents, LENGTH } from '.';

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

    test(`when length is less than ${LENGTH}`, () => {
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
    test('when is a boleto valid without mask', () => {
      expect(isValid('00190000090114971860168524522114675860000102656')).toBe(true);
    });

    test('when is a boleto valid with mask', () => {
      expect(isValid('0019000009 01149.718601 68524.522114 6 75860000102656')).toBe(true);
    });
  });

  describe('should return false', () => {
    test('when check digit mod10 is invalid', () => {
      expect(isValid('00190000020114971860168524522114675860000102656')).toBe(false);
    });

    test('check digit mod11 is invalid', () => {
      expect(isValid('00190000090114971860168524522114975860000102656')).toBe(false);
    });
  });
});

describe('format', () => {
  test('should format boleto with mask', () => {
    expect(format('')).toBe('');
    expect(format('1')).toBe('1');
    expect(format('10')).toBe('10');
    expect(format('104')).toBe('104');
    expect(format('1049')).toBe('1049');
    expect(format('10491')).toBe('10491');
    expect(format('104914')).toBe('10491.4');
    expect(format('1049144')).toBe('10491.44');
    expect(format('10491443')).toBe('10491.443');
    expect(format('104914433')).toBe('10491.4433');
    expect(format('1049144338')).toBe('10491.44338');
    expect(format('10491443385')).toBe('10491.44338 5');
    expect(format('104914433855')).toBe('10491.44338 55');
    expect(format('1049144338551')).toBe('10491.44338 551');
    expect(format('10491443385511')).toBe('10491.44338 5511');
    expect(format('104914433855119')).toBe('10491.44338 55119');
    expect(format('1049144338551190')).toBe('10491.44338 55119.0');
    expect(format('10491443385511900')).toBe('10491.44338 55119.00');
    expect(format('104914433855119000')).toBe('10491.44338 55119.000');
    expect(format('1049144338551190000')).toBe('10491.44338 55119.0000');
    expect(format('10491443385511900000')).toBe('10491.44338 55119.00000');
    expect(format('104914433855119000002')).toBe('10491.44338 55119.000002');
    expect(format('1049144338551190000020')).toBe('10491.44338 55119.000002 0');
    expect(format('10491443385511900000200')).toBe('10491.44338 55119.000002 00');
    expect(format('104914433855119000002000')).toBe('10491.44338 55119.000002 000');
    expect(format('1049144338551190000020000')).toBe('10491.44338 55119.000002 0000');
    expect(format('10491443385511900000200000')).toBe('10491.44338 55119.000002 00000');
    expect(format('104914433855119000002000000')).toBe('10491.44338 55119.000002 00000.0');
    expect(format('1049144338551190000020000000')).toBe('10491.44338 55119.000002 00000.00');
    expect(format('10491443385511900000200000000')).toBe('10491.44338 55119.000002 00000.000');
    expect(format('104914433855119000002000000001')).toBe('10491.44338 55119.000002 00000.0001');
    expect(format('1049144338551190000020000000014')).toBe('10491.44338 55119.000002 00000.00014');
    expect(format('10491443385511900000200000000141')).toBe('10491.44338 55119.000002 00000.000141');
    expect(format('104914433855119000002000000001413')).toBe('10491.44338 55119.000002 00000.000141 3');
    expect(format('1049144338551190000020000000014132')).toBe('10491.44338 55119.000002 00000.000141 3 2');
    expect(format('10491443385511900000200000000141325')).toBe('10491.44338 55119.000002 00000.000141 3 25');
    expect(format('104914433855119000002000000001413252')).toBe('10491.44338 55119.000002 00000.000141 3 252');
    expect(format('1049144338551190000020000000014132523')).toBe('10491.44338 55119.000002 00000.000141 3 2523');
    expect(format('10491443385511900000200000000141325230')).toBe('10491.44338 55119.000002 00000.000141 3 25230');
    expect(format('104914433855119000002000000001413252300')).toBe('10491.44338 55119.000002 00000.000141 3 252300');
    expect(format('1049144338551190000020000000014132523000')).toBe('10491.44338 55119.000002 00000.000141 3 2523000');
    expect(format('10491443385511900000200000000141325230000')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000'
    );
    expect(format('104914433855119000002000000001413252300000')).toBe(
      '10491.44338 55119.000002 00000.000141 3 252300000'
    );
    expect(format('1049144338551190000020000000014132523000009')).toBe(
      '10491.44338 55119.000002 00000.000141 3 2523000009'
    );
    expect(format('10491443385511900000200000000141325230000093')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000093'
    );
    expect(format('104914433855119000002000000001413252300000934')).toBe(
      '10491.44338 55119.000002 00000.000141 3 252300000934'
    );
    expect(format('1049144338551190000020000000014132523000009342')).toBe(
      '10491.44338 55119.000002 00000.000141 3 2523000009342'
    );
    expect(format('10491443385511900000200000000141325230000093423')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000093423'
    );
  });

  test(`shouldn't add digits after the boleto length (${LENGTH})`, () => {
    expect(format('10491443385511900000200000000141325230000093423123123123')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000093423'
    );

    expect(format('10491443385511900000200000000141325230000093423123123123')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000093423'
    );
  });

  test('should remove all non numeric characters boleto', () => {
    expect(format('10491.44A338 55119.000002? ABC00000.000?141 3 25230000093423')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000093423'
    );

    expect(format('10491.44A338 55119.000002? ABC00000.000?141 3 25230000093423')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000093423'
    );
  });

  test('should return an empty string when receive an empty string', () => {
    expect(format('')).toBe('');
    expect(format('')).toBe('');
  });
});

describe('getValueInCents', () => {
  describe('should return zero', () => {
    test('should return zero value when boleto is empty string', () => {
      expect(getValueInCents("")).toBe(0);
    });

    test('should return zero value when boleto is invalid', () => {
      expect(getValueInCents("00190000090114971860168524522114775860000102656")).toBe(0);
    });
  });

  describe('should return boleto value', () => {
    test('should return the value in cents', () => {
      expect(getValueInCents("00190000090114971860168524522114675860000102656")).toBe(102656);
    });

    test('should return value in cents when boleto is with mask' ,() => {
      expect(getValueInCents("0019000009 01149.718601 68524.522114 6 75860000102656")).toBe(102656);
    });
  })
});
