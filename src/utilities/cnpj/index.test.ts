import { format, LENGTH, isValid, generate, RESERVED_NUMBERS } from '.';

describe('format', () => {
  test('should format cnpj with mask', () => {
    expect(format('')).toBe('');
    expect(format('4')).toBe('4');
    expect(format('46')).toBe('46');
    expect(format('468')).toBe('46.8');
    expect(format('4684')).toBe('46.84');
    expect(format('46843')).toBe('46.843');
    expect(format('468434')).toBe('46.843.4');
    expect(format('4684348')).toBe('46.843.48');
    expect(format('46843485')).toBe('46.843.485');
    expect(format('468434850')).toBe('46.843.485/0');
    expect(format('4684348500')).toBe('46.843.485/00');
    expect(format('46843485000')).toBe('46.843.485/000');
    expect(format('468434850001')).toBe('46.843.485/0001');
    expect(format('4684348500018')).toBe('46.843.485/0001-8');
    expect(format('46843485000186')).toBe('46.843.485/0001-86');
  });

  test(`should NOT add digits after the CNPJ length (${LENGTH})`, () => {
    expect(format('468434850001860000000000')).toBe('46.843.485/0001-86');
  });

  test('should remove all non numeric characters', () => {
    expect(format('46.?ABC843.485/0001-86abc')).toBe('46.843.485/0001-86');
  });
});

describe('isValid', () => {
  describe('should return false', () => {
    test('when it is on the RESERVED_NUMBERS', () => {
      RESERVED_NUMBERS.forEach(cnpj => expect(isValid(cnpj)).toBe(false));
    });

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

    test(`when dont match with CNPJ length (${LENGTH})`, () => {
      expect(isValid('12312312312')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValid('ababcabcabcdab')).toBe(false);
    });

    test('when is a CNPJ invalid test numbers with letters', () => {
      expect(isValid('6ad0.t391.9asd47/0ad001-00')).toBe(false);
    });

    test('when is a CNPJ invalid', () => {
      expect(isValid('11257245286531')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a CNPJ valid without mask', () => {
      expect(isValid('13723705000189')).toBe(true);
    });

    test('when is a CNPJ valid with mask', () => {
      expect(isValid('60.391.947/0001-00')).toBe(true);
    });
  });
});

describe('generate', () => {
  test(`should have the right length without mask (${LENGTH})`, () => {
    expect(generate().length).toBe(LENGTH);
  });

  test('should return valid CNPJ', () => {
    // iterate over 100 to insure that random generated CPNJ is valid
    for (let i = 0; i < 100; i++) {
      expect(isValid(generate())).toBe(true);
    }
  });
});
