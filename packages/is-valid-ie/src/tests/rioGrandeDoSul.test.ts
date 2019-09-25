
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Rio Grande do Sul', () => {
    test('when IE for Rio Grande do Sul is correct', () => {
      // base rule
      expect(isValidIE(STATES.RS, '0305169149')).toBe(true);
      // digit 10 converted to 0
      expect(isValidIE(STATES.RS, '1202762660')).toBe(true);
      // digit 11 converted to 0
      expect(isValidIE(STATES.RS, '1202762120')).toBe(true);
    });
  });
  describe('should return false for Rio Grande do Sul', () => {
    test('when IE for Rio Grande do Sul is incorrect', () => {
      // first verified digit incorrect
      expect(isValidIE(STATES.RS, '2007693232')).toBe(false);
      // length different from 10
      expect(isValidIE(STATES.RS, '02007693230')).toBe(false);
    });
  });
});
