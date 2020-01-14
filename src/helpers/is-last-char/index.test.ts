import { isLastChar } from '.';

describe('isLastChar', () => {
  test('should return true when index is the same as last index of the string', () => {
    expect(isLastChar(2, '123')).toBe(true);
  });

  test('should return false when index is NOT the same as last index of the string', () => {
    expect(isLastChar(1, '123')).toBe(false);
    expect(isLastChar(3, '123')).toBe(false);
  });
});
