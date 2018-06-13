import normalize from '../normalize';

describe('normalize', () => {
  test('should remove all characters that are not numbers', () => {
    expect(normalize('123abc456?.#789xyz 0')).toBe('1234567890');
  });
});
