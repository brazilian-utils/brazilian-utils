
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Amapa', () => {
    test('when IE for Amapa is correct', () => {
      expect(isValidIE(STATES.AP, '036029572')).toBe(true);
      expect(isValidIE(STATES.AP, '030123459')).toBe(true);
      expect(isValidIE(STATES.AP, '030000080')).toBe(true);
      expect(isValidIE(STATES.AP, '030000160')).toBe(true);
      expect(isValidIE(STATES.AP, '030170011')).toBe(true);
      expect(isValidIE(STATES.AP, '030170020')).toBe(true);
      expect(isValidIE(STATES.AP, '030170071')).toBe(true);
    });
  });
  describe('should return false for Amapa', () => {
    test('when IE for Amapa is incorrect', () => {
      // verifier digit false
      expect(isValidIE(STATES.AP, '036029573')).toBe(false);
      // more then 9 digits
      expect(isValidIE(STATES.AP, '0306029570')).toBe(false);
      // does not start with 03
      expect(isValidIE(STATES.AP, '003060292')).toBe(false);
    });
  });
});
