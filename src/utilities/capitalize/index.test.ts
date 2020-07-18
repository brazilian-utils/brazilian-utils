import { capitalize } from '.';

describe('capitalize', () => {
  describe('should capitalize', () => {
    test('when the value does not contain preposition', () => {
      expect(capitalize('esponja vegetal')).toBe('Esponja Vegetal');
      expect(capitalize('refrigerante 1l')).toBe('Refrigerante 1L');
      expect(capitalize('JOAQUIM JOSÉ')).toBe('Joaquim José');
    });

    test('when the value does contain preposition', () => {
      expect(capitalize('esponja DE aço 60g')).toBe('Esponja de Aço 60G');
      expect(capitalize('fulano de tal')).toBe('Fulano de Tal');
      expect(capitalize('pão com manteiga')).toBe('Pão com Manteiga');
    });

    test('when the value does contain short words', () => {
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A B C')).toBe('A b c');
    });

    test('when the value does contain empty spaces', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(' ')).toBe('');
      expect(capitalize('esponja de    aço 60g')).toBe('Esponja de Aço 60G');
      expect(capitalize('  refrigerante 1   l')).toBe('Refrigerante 1 l');
    });

    test('when the value does contain ignored words', () => {
      expect(capitalize('CNPJ inválido', ['CNPJ'])).toBe('CNPJ Inválido');
      expect(capitalize('CNPJ da empresa ME', ['CNPJ', 'ME'])).toBe('CNPJ da Empresa ME');
      expect(capitalize('josé De MARIA', ['De'])).toBe('José De Maria');
    });
  });
});
