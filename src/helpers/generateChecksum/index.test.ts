import generateChecksum from '.';

describe('Generate Checksum Helper', () => {
  test('should generate the right checksum', () => {
    const baseNumber = 12;
    const weight = 10;

    expect(generateChecksum(baseNumber, weight)).toBe(28);
  });

  test('should generate the right checksum', () => {
    const baseNumber = 12;
    const weight = [10, 9];

    expect(generateChecksum(baseNumber, weight)).toBe(28);
  });

  test('should throw error invalid type', () => {
    const baseNumber = 12;
    const weight = 'teste';

    expect(() => generateChecksum(baseNumber, weight as any)).toThrow();
  });
});
