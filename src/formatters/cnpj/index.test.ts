import format, { CNPJ_LENGTH } from '.';

describe('CNPJ formatter', () => {
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

  test(`should NOT add digits after the CNPJ length (${CNPJ_LENGTH})`, () => {
    expect(format('468434850001860000000000')).toBe('46.843.485/0001-86');
  });

  test('should remove all non numeric characters', () => {
    expect(format('46.?ABC843.485/0001-86abc')).toBe('46.843.485/0001-86');
  });
});
