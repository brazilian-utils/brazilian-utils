import format, { CPF_LENGTH } from '.';

describe('CPF formatter', () => {
  test('should format cpf with mask', () => {
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

  test(`should NOT add digits after the CPF length (${CPF_LENGTH})`, () => {
    expect(format('94389575104000000')).toBe('943.895.751-04');
  });

  test('should remove all non numeric characters', () => {
    expect(format('943.?ABC895.751-04abc')).toBe('943.895.751-04');
  });
});
