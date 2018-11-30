import isValidCpf from '@brazilian-utils/is-valid-cpf';

import cpfGenerator from '..';
import { CPF_LENGTH, STATES, STATES_CODE } from '../constants';

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
      STATES.map(state =>
        test(state, () => {
          expect(
            cpfGenerator({ state }).substr(8, 1) === STATES_CODE[state]
          ).toBe(true);
        })
      );
    });
  });
});
