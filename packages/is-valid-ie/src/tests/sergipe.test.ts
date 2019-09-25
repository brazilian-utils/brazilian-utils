
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Sergipe', () => {
    test('when IE for Sergipe is correct', () => {
      // base rule
      expect(isValidIE(STATES.SE, '017682606')).toBe(true);
    });
  });
});
