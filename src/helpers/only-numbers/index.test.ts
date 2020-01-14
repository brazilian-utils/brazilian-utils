import { onlyNumbers } from '.';

describe('onlyNumbers', () => {
  test('should remove all non numeric characters', () => {
    expect(onlyNumbers('abcd')).toBe('');
    expect(onlyNumbers('12345')).toBe('12345');
    expect(onlyNumbers('12345 ')).toBe('12345');
    expect(onlyNumbers(' 12345')).toBe('12345');
    expect(onlyNumbers(' 12345 ')).toBe('12345');
    expect(onlyNumbers('abcd12345')).toBe('12345');
    expect(onlyNumbers('123abc456?.#789xyz 0')).toBe('1234567890');
    expect(onlyNumbers(12345)).toBe('12345');
    expect(onlyNumbers(0o12345)).toBe('5349');
    expect(onlyNumbers(0x12345)).toBe('74565');
  });
});
