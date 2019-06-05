import generateCheckSum from '../src';

describe('generate', () => {
  test('should generate the right checksum', () => {
    const base = 12;
    const weight = 10;

    expect(generateCheckSum(base, weight)).toBe(28);
  });

  test('should generate the right checksum', () => {
    const base = 12;
    const weights = [10, 9];

    expect(generateCheckSum(base, weights)).toBe(28);
  });

  test('should throw error invalid type', () => {
    const base = 12;
    const weight = 'test';

    expect(() => generateCheckSum(base, weight as any)).toThrow();
  });
});
