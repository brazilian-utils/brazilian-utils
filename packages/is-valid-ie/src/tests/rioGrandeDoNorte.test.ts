
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Rio Grande do Norte', () => {
    test('when IE for Rio Grande do Norte is correct', () => {
      // base rule
      expect(isValidIE(STATES.RN, '2007693232')).toBe(true);
      // digit 10 converted to 0
      expect(isValidIE(STATES.RN, '2003569880')).toBe(true);
      // old IE
      expect(isValidIE(STATES.RN, '203569881')).toBe(true);
    });
  });
  describe('should return false for Rio Grande do Norte', () => {
    test('when IE for Rio Grande do Norte is incorrect', () => {
      // first verified digit incorrect
      expect(isValidIE(STATES.RN, '2007693231')).toBe(false);
      // does not start with 20
      expect(isValidIE(STATES.RN, '0203569881')).toBe(false);
      // length different from 9 or 10
      expect(isValidIE(STATES.RN, '20356988104')).toBe(false);
    });
  });
});
