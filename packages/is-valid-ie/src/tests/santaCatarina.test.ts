
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Santa Catarina', () => {
    test('when IE for Santa Catarina is correct', () => {
      // base rule
      expect(isValidIE(STATES.SC, '330430572')).toBe(true);
    });
  });
});
