// tslint:disable:no-expression-statement
import onlyNumbers from '.';

describe('@brazilian-utils/helper-only-numbers', () => {
  test('remove all non numeric characters', () => {
    expect(onlyNumbers('123abc456?.#789xyz 0')).toBe('1234567890');
  });
});
