import { STATES, STATES_CODE } from '../common/states';
import { formatCPF, generateCPF, CPF_LENGTH } from './cpf';

describe('formatCPF', () => {
  test('should format CPF with mask', () => {
    expect(formatCPF('')).toBe('');
    expect(formatCPF('9')).toBe('9');
    expect(formatCPF('94')).toBe('94');
    expect(formatCPF('943')).toBe('943');
    expect(formatCPF('9438')).toBe('943.8');
    expect(formatCPF('94389')).toBe('943.89');
    expect(formatCPF('943895')).toBe('943.895');
    expect(formatCPF('9438957')).toBe('943.895.7');
    expect(formatCPF('94389575')).toBe('943.895.75');
    expect(formatCPF('943895751')).toBe('943.895.751');
    expect(formatCPF('9438957510')).toBe('943.895.751-0');
    expect(formatCPF('94389575104')).toBe('943.895.751-04');
  });

  test(`should NOT add digits after the CPF length (${CPF_LENGTH})`, () => {
    expect(formatCPF('94389575104000000')).toBe('943.895.751-04');
  });

  test('should remove all non numeric characters', () => {
    expect(formatCPF('943.?ABC895.751-04abc')).toBe('943.895.751-04');
  });
});

describe('generateCPF', () => {
  test(` should have the right length without mask (${CPF_LENGTH})`, () => {
    expect(generateCPF().length).toBe(CPF_LENGTH);
  });

  //   test('should return valid CPF', () => {
  //     expect(isValidCPF(generateCPF())).toBe(true);
  //   });

  describe('should return a valid CPF for each bazilian state with Initials', () => {
    STATES.map(state =>
      test(state, () => {
        expect(generateCPF(state).substr(8, 1) === STATES_CODE[state]).toBe(true);
      })
    );
  });
});
