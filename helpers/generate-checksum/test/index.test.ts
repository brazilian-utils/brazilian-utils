import { generateChecksum } from '../src';

describe('generate', () => {
  test('should generate the right checksum', () => {
    const base = 12;
    const weight = 10;

    expect(generateChecksum(base, weight)).toBe(28);
  });

  test('should generate the right checksum', () => {
    const base = 12;
    const weights = [10, 9];

    expect(generateChecksum(base, weights)).toBe(28);
  });

  test('should throw error invalid type', () => {
    const base = 12;
    const weight = 'test';

    expect(() => generateChecksum(base, weight as any)).toThrow();
  });
});
