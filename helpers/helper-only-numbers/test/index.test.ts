import onlyNumbers from '../src';

describe('onlyNumbers', () => {
  test('should remove all non numeric characters', () => {
    expect(onlyNumbers(12345)).toBe('12345');
    expect(onlyNumbers('123abc456?.#789xyz 0')).toBe('1234567890');
  });
});
