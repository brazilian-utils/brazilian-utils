import formatCnpj from '../';
import { CNPJ_LENGTH } from '../constants';

describe('formatCnpj', () => {
  test('should format cnpj with mask', () => {
    expect(formatCnpj('')).toBe('');
    expect(formatCnpj('4')).toBe('4');
    expect(formatCnpj('46')).toBe('46');
    expect(formatCnpj('468')).toBe('46.8');
    expect(formatCnpj('4684')).toBe('46.84');
    expect(formatCnpj('46843')).toBe('46.843');
    expect(formatCnpj('468434')).toBe('46.843.4');
    expect(formatCnpj('4684348')).toBe('46.843.48');
    expect(formatCnpj('46843485')).toBe('46.843.485');
    expect(formatCnpj('468434850')).toBe('46.843.485/0');
    expect(formatCnpj('4684348500')).toBe('46.843.485/00');
    expect(formatCnpj('46843485000')).toBe('46.843.485/000');
    expect(formatCnpj('468434850001')).toBe('46.843.485/0001');
    expect(formatCnpj('4684348500018')).toBe('46.843.485/0001-8');
    expect(formatCnpj('46843485000186')).toBe('46.843.485/0001-86');
  });

  test(`should NOT add digits after the CNPJ length (${CNPJ_LENGTH})`, () => {
    expect(formatCnpj('468434850001860000000000')).toBe('46.843.485/0001-86');
  });

  test('should remove all non numeric characters', () => {
    expect(formatCnpj('46.?ABC843.485/0001-86abc')).toBe('46.843.485/0001-86');
  });
});
