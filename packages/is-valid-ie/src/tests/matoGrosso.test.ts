
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Mato Grosso', () => {
    test('when IE for Mato Grosso is correct', () => {
      // base rule
      expect(isValidIE(STATES.MT, '60474120469')).toBe(true);
    });
  });
  describe('should return false for Mato Grosso', () => {
    test('when IE for Mato Grosso is incorrect', () => {
      // verified digit incorrect
      expect(isValidIE(STATES.MT, '12345678901')).toBe(false);
      // length different from 11
      expect(isValidIE(STATES.MT, '1234567890112')).toBe(false);
    });
  });
});
