import { STATES, STATES_DATA } from '../../common/states';
import { format, LENGTH, isValid, generate, RESERVED_NUMBERS } from '.';

describe('format', () => {
  test('should format CPF with mask', () => {
    expect(format('')).toBe('');
    expect(format('9')).toBe('9');
    expect(format('94')).toBe('94');
    expect(format('943')).toBe('943');
    expect(format('9438')).toBe('943.8');
    expect(format('94389')).toBe('943.89');
    expect(format('943895')).toBe('943.895');
    expect(format('9438957')).toBe('943.895.7');
    expect(format('94389575')).toBe('943.895.75');
    expect(format('943895751')).toBe('943.895.751');
    expect(format('9438957510')).toBe('943.895.751-0');
    expect(format('94389575104')).toBe('943.895.751-04');
  });

  test(`should NOT add digits after the CPF length (${LENGTH})`, () => {
    expect(format('94389575104000000')).toBe('943.895.751-04');
  });

  test('should remove all non numeric characters', () => {
    expect(format('943.?ABC895.751-04abc')).toBe('943.895.751-04');
  });
});

describe('generate', () => {
  test(`should have the right length without mask (${LENGTH})`, () => {
    expect(generate().length).toBe(LENGTH);
  });

  test('should return valid CPF', () => {
    // iterate over 100 to insure that random generated CPF is valid
    for (let i = 0; i < 100; i++) {
      expect(isValid(generate())).toBe(true);
    }
  });

  describe('should return a valid CPF for each brazilian state with initials', () => {
    STATES.map(state =>
      test(state, () => {
        expect(generate(state).substr(8, 1) === STATES_DATA[state].code).toBe(true);
      })
    );
  });
});

describe('isValid', () => {
  describe('should return false', () => {
    test('when it is on the RESERVED_WORDS', () => {
      RESERVED_NUMBERS.forEach(cpf => expect(isValid(cpf)).toBe(false));
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

    test(`when dont match with CPF length (${LENGTH})`, () => {
      expect(isValid('123456')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValid('abcabcabcde')).toBe(false);
    });

    test('when is a CPF invalid', () => {
      expect(isValid('11257245286')).toBe(false);
    });

    test('when is a CPF invalid test numbers with letters', () => {
      expect(isValid('foo391.838.38test0-66')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a CPF valid without mask', () => {
      expect(isValid('40364478829')).toBe(true);
    });

    test('when is a CPF valid with mask', () => {
      expect(isValid('962.718.458-60')).toBe(true);
    });
  });
});
