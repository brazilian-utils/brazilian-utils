
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Amazonas', () => {
    test('when IE for Amazonas is correct', () => {
      expect(isValidIE(STATES.AM, '48.063.523-4')).toBe(true);
      expect(isValidIE(STATES.AM, '036029572')).toBe(true);
      expect(isValidIE(STATES.AM, '000000019')).toBe(true);
      expect(isValidIE(STATES.AM, '046893830')).toBe(true);
    });
  });
  describe('should return false for Amazonas', () => {
    test('when IE for Amazonas is incorrect', () => {
      // verifier digit false
      expect(isValidIE(STATES.AM, '036029573')).toBe(false);
      // more then 9 digits
      expect(isValidIE(STATES.AM, '0036029572')).toBe(false);
    });
  });
});
