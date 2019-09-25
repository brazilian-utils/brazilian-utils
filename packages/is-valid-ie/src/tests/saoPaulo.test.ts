
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Sao Paulo', () => {
    test('when IE for Sao Paulo is correct', () => {
      // base rule
      expect(isValidIE(STATES.SP, '110042490114')).toBe(true);
    });
  });
  describe('should return false for Sao Paulo', () => {
    test('when IE for Sao Paulo is incorrect', () => {
      // length bigger than 12
      expect(isValidIE(STATES.SP, '1110042494114')).toBe(false);
      // second verified digit incorrect
      expect(isValidIE(STATES.SP, '110042490113')).toBe(false);
      // first verified digit incorrect
      expect(isValidIE(STATES.SP, '110042498113')).toBe(false);
    });
  });
});
