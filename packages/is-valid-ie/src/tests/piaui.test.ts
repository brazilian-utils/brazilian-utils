
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Piaui', () => {
    test('when IE for Piaui is correct', () => {
      // base rule
      expect(isValidIE(STATES.PI, '052364534')).toBe(true);
    });
  });
});
