import { generateCPF } from '..';
import { CPF_LENGTH, STATES_CODE, STATES } from '.';

import { isValidCPF } from '../../validators';

describe('generateCPF', () => {
  describe('should have the right length', () => {
    test(`without mask (${CPF_LENGTH})`, () => {
      expect(generateCPF().length).toBe(CPF_LENGTH);
    });
  });

  test('should return valid CPF', () => {
    expect(isValidCPF(generateCPF())).toBe(true);
  });

  describe('should return a valid CPF for each bazilian state', () => {
    describe('with Initials', () => {
      STATES.map(state =>
        test(state, () => {
          expect(
            generateCPF({ state }).substr(8, 1) === STATES_CODE[state]
          ).toBe(true);
        })
      );
    });
  });
});
