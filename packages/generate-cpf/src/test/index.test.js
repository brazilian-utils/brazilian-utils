import cpfGenerator from '../';
import { CPF_LENGTH, STATES_CODE } from '../constants';
import isValidCpf from '../../../is-valid-cpf/src';

describe('cpfGenerator', () => {
  describe('should have the right length', () => {
    test(`without mask (${CPF_LENGTH})`, () => {
      expect(cpfGenerator().length).toBe(CPF_LENGTH);
    });
  });

  test('should return valid CPF', () => {
    expect(isValidCpf(cpfGenerator())).toBe(true);
  });

  describe('should return a valid CPF for each bazilian state', () => {
    describe('with Initials', () => {
      Object.keys(STATES_CODE).map(state =>
        test(state, () => {
          expect(cpfGenerator({ state }).substr(8, 1) === STATES_CODE[state]).toBe(true);
        })
      );
    });
  });
});
