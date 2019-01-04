// tslint:disable:no-expression-statement
import generateCheckSum from '.';

describe('generate', () => {
  test('should generate the right checksum', () => {
    const baseNumber = 12;
    const weight = 10;

    expect(generateCheckSum(baseNumber, weight)).toBe(28);
  });

  test('should generate the right checksum', () => {
    const baseNumber = 12;
    const weight: ReadonlyArray<any> = [10, 9];

    expect(generateCheckSum(baseNumber, weight)).toBe(28);
  });

  test('should throw error invalid type', () => {
    const baseNumber = 12;
    const weight = 'teste';

    expect(() => generateCheckSum(baseNumber, weight as any)).toThrow();
  });
});
