import { format, LENGTH, isValid, generate, RESERVED_NUMBERS, FormatCnpjOptions, CnpjVersions } from '.';

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

  test('should format cnpj alphanumeric with mask for version 2', () => {
    const options: FormatCnpjOptions = {
      version: '2',
    };

    expect(format('', options)).toBe('');
    expect(format('Q', options)).toBe('Q');
    expect(format('Q0', options)).toBe('Q0');
    expect(format('Q0S', options)).toBe('Q0.S');
    expect(format('Q0SL', options)).toBe('Q0.SL');
    expect(format('Q0SLF', options)).toBe('Q0.SLF');
    expect(format('Q0SLFM', options)).toBe('Q0.SLF.M');
    expect(format('Q0SLFMB', options)).toBe('Q0.SLF.MB');
    expect(format('Q0SLFMBD', options)).toBe('Q0.SLF.MBD');
    expect(format('Q0SLFMBD7', options)).toBe('Q0.SLF.MBD/7');
    expect(format('Q0SLFMBD7V', options)).toBe('Q0.SLF.MBD/7V');
    expect(format('Q0SLFMBD7VX', options)).toBe('Q0.SLF.MBD/7VX');
    expect(format('Q0SLFMBD7VX4', options)).toBe('Q0.SLF.MBD/7VX4');
    expect(format('Q0SLFMBD7VX43', options)).toBe('Q0.SLF.MBD/7VX4-3');
    expect(format('q0SLFMBD7VX439', options)).toBe('Q0.SLF.MBD/7VX4-39');
  });

  test('should format number cnpj with mask', () => {
    expect(format(4)).toBe('4');
    expect(format(46)).toBe('46');
    expect(format(468)).toBe('46.8');
    expect(format(4684)).toBe('46.84');
    expect(format(46843)).toBe('46.843');
    expect(format(468434)).toBe('46.843.4');
    expect(format(4684348)).toBe('46.843.48');
    expect(format(46843485)).toBe('46.843.485');
    expect(format(468434850)).toBe('46.843.485/0');
    expect(format(4684348500)).toBe('46.843.485/00');
    expect(format(46843485000)).toBe('46.843.485/000');
    expect(format(468434850001)).toBe('46.843.485/0001');
    expect(format(4684348500018)).toBe('46.843.485/0001-8');
    expect(format(46843485000186)).toBe('46.843.485/0001-86');
  });

  test('should format cnpj with mask filling zeroes', () => {
    expect(format('', { pad: true })).toBe('00.000.000/0000-00');
    expect(format('4', { pad: true })).toBe('00.000.000/0000-04');
    expect(format('46', { pad: true })).toBe('00.000.000/0000-46');
    expect(format('468', { pad: true })).toBe('00.000.000/0004-68');
    expect(format('4684', { pad: true })).toBe('00.000.000/0046-84');
    expect(format('46843', { pad: true })).toBe('00.000.000/0468-43');
    expect(format('468434', { pad: true })).toBe('00.000.000/4684-34');
    expect(format('4684348', { pad: true })).toBe('00.000.004/6843-48');
    expect(format('46843485', { pad: true })).toBe('00.000.046/8434-85');
    expect(format('468434850', { pad: true })).toBe('00.000.468/4348-50');
    expect(format('4684348500', { pad: true })).toBe('00.004.684/3485-00');
    expect(format('46843485000', { pad: true })).toBe('00.046.843/4850-00');
    expect(format('468434850001', { pad: true })).toBe('00.468.434/8500-01');
    expect(format('4684348500018', { pad: true })).toBe('04.684.348/5000-18');
    expect(format('46843485000186', { pad: true })).toBe('46.843.485/0001-86');
  });

  test('should format number cnpj with mask filling zeroes', () => {
    expect(format(4, { pad: true })).toBe('00.000.000/0000-04');
    expect(format(46, { pad: true })).toBe('00.000.000/0000-46');
    expect(format(468, { pad: true })).toBe('00.000.000/0004-68');
    expect(format(4684, { pad: true })).toBe('00.000.000/0046-84');
    expect(format(46843, { pad: true })).toBe('00.000.000/0468-43');
    expect(format(468434, { pad: true })).toBe('00.000.000/4684-34');
    expect(format(4684348, { pad: true })).toBe('00.000.004/6843-48');
    expect(format(46843485, { pad: true })).toBe('00.000.046/8434-85');
    expect(format(468434850, { pad: true })).toBe('00.000.468/4348-50');
    expect(format(4684348500, { pad: true })).toBe('00.004.684/3485-00');
    expect(format(46843485000, { pad: true })).toBe('00.046.843/4850-00');
    expect(format(468434850001, { pad: true })).toBe('00.468.434/8500-01');
    expect(format(4684348500018, { pad: true })).toBe('04.684.348/5000-18');
    expect(format(46843485000186, { pad: true })).toBe('46.843.485/0001-86');
  });

  test(`should NOT add digits after the CNPJ length (${LENGTH})`, () => {
    expect(format('468434850001860000000000')).toBe('46.843.485/0001-86');
  });

  test('should remove all non numeric characters', () => {
    expect(format('46.?ABC843.485/0001-86abc')).toBe('46.843.485/0001-86');
  });

  test('should remove non-alphanumeric characters for version 2', () => {
    expect(format('46.?ABC843.485/0001-86abc', { version: '2' })).toBe('46.ABC.843/4850-00');
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

  test('should return valid CNPJ version 2', () => {
    const options: { version?: CnpjVersions } = { version: '2' };
    // iterate over 100 to insure that random generated CPNJ is valid
    for (let i = 0; i < 100; i++) {
      expect(isValid(generate(options), options)).toBe(true);
    }
  });
});

describe('isValid', () => {
  describe('should return false', () => {
    test('when it is on the RESERVED_NUMBERS', () => {
      RESERVED_NUMBERS.forEach((cnpj) => expect(isValid(cnpj)).toBe(false));
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

    test('when it is an object', () => {
      expect(isValid({} as any)).toBe(false);
    });

    test('when it is an array', () => {
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
