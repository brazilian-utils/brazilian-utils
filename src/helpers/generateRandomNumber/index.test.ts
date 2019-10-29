import { generateRandomNumber } from '.';

describe('generateRandomNumber', () => {
  test('should generate random number', () => {
    expect(generateRandomNumber(1)).toHaveLength(1);
    expect(generateRandomNumber(10)).toHaveLength(10);
    expect(generateRandomNumber(100)).toHaveLength(100);
  });
});
