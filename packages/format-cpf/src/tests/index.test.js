import formatCpf from '../';
import { CPF_LENGTH } from '../constants';

describe('formatCpf', () => {
  test('should format cpf with mask', () => {
    expect(formatCpf('')).toBe('');
    expect(formatCpf('9')).toBe('9');
    expect(formatCpf('94')).toBe('94');
    expect(formatCpf('943')).toBe('943');
    expect(formatCpf('9438')).toBe('943.8');
    expect(formatCpf('94389')).toBe('943.89');
    expect(formatCpf('943895')).toBe('943.895');
    expect(formatCpf('9438957')).toBe('943.895.7');
    expect(formatCpf('94389575')).toBe('943.895.75');
    expect(formatCpf('943895751')).toBe('943.895.751');
    expect(formatCpf('9438957510')).toBe('943.895.751-0');
    expect(formatCpf('94389575104')).toBe('943.895.751-04');
  });

  test(`should NOT add digits after the CPF length (${CPF_LENGTH})`, () => {
    expect(formatCpf('94389575104000000')).toBe('943.895.751-04');
  });

  test('should remove all non numeric characters', () => {
    expect(formatCpf('943.?ABC895.751-04abc')).toBe('943.895.751-04');
  });
});
