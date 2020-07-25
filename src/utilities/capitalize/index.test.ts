import { capitalize } from '.';

describe('capitalize', () => {
  describe('should capitalize', () => {
    test('when the value does not contain preposition', () => {
      expect(capitalize('esponja vegetal')).toBe('Esponja Vegetal');
      expect(capitalize('refrigerante 1L')).toBe('Refrigerante 1l');
      expect(capitalize('JOAQUIM JOSÉ')).toBe('Joaquim José');
    });

    test('when the value does contain preposition', () => {
      expect(capitalize('esponja DE aço 60G')).toBe('Esponja de Aço 60g');
      expect(capitalize('fulano de tal')).toBe('Fulano de Tal');
      expect(capitalize('pão com manteiga')).toBe('Pão com Manteiga');
    });

    test('when the value does contain short words', () => {
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A B C')).toBe('A B C');
    });

    test('when the value does contain empty spaces', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(' ')).toBe('');
      expect(capitalize('esponja de    aço 60G')).toBe('Esponja de Aço 60g');
      expect(capitalize('  refrigerante 1l')).toBe('Refrigerante 1l');
    });

    test('when the value does contain upper case words', () => {
      expect(capitalize('doc da empresa ab', { upperCaseWords: ['DOC', 'AB'] })).toBe('DOC da Empresa AB');
      expect(capitalize('doc inválido', { upperCaseWords: ['DOC'] })).toBe('DOC Inválido');
    });
    test('when the value does contain lower case words', () => {
      expect(capitalize('josé Ama MARIA', { lowerCaseWords: ['ama'] })).toBe('José ama Maria');
      expect(capitalize('josé Não Ama MARIA', { lowerCaseWords: ['não', 'ama'] })).toBe('José não ama Maria');
    });
  });
});
