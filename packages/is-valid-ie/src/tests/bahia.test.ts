
import isValidIE from '..';
import { STATES } from '../constants';

describe('isValidIE', () => {
  describe('should return true for Bahia', () => {
    test('when IE for Bahia is correct', () => {
      // 8 digits
      // mod 10
      expect(isValidIE(STATES.BA, '12345663')).toBe(true);
      // mod 11
      expect(isValidIE(STATES.BA, '74219145')).toBe(true);
      // 9 digits
      // mod 10
      expect(isValidIE(STATES.BA, '038343081')).toBe(true);
      expect(isValidIE(STATES.BA, '100000306')).toBe(true);
      // mod 11
      expect(isValidIE(STATES.BA, '778514741')).toBe(true);
      // 9 digits starting with 0
      expect(isValidIE(STATES.BA, '078771760')).toBe(true);
      expect(isValidIE(STATES.BA, '039474751')).toBe(true);
      expect(isValidIE(STATES.BA, '090529323')).toBe(true);
      // 8 digits starting with 0
      expect(isValidIE(STATES.BA, '04772253')).toBe(true);
    });
  });
  describe('should return false for Bahia', () => {
    test('when IE for Bahia is incorrect', () => {
      // mod 10
      expect(isValidIE(STATES.BA, '12345636')).toBe(false);
      // mod 11
      expect(isValidIE(STATES.BA, '74219154')).toBe(false);

      // 9 digits
      // mod 10
      expect(isValidIE(STATES.BA, '038343001')).toBe(false);
      // mod 11
      expect(isValidIE(STATES.BA, '778514731')).toBe(false);
      // more than 9 digits
      expect(isValidIE(STATES.BA, '0012345636')).toBe(false);
    });
  });
});
