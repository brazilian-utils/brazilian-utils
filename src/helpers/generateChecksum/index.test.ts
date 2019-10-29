import { generateChecksum } from '.';

describe('generateChecksum', () => {
  test('should generate the right checksum', () => {
    expect(generateChecksum(12, 10)).toBe(28);
  });

  test('should generate the right checksum', () => {
    expect(generateChecksum(12, [10, 9])).toBe(28);
  });
});
