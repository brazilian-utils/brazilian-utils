import { onlyNumbers } from '..';

export function generateChecksum(base: string | number, weight: number | number[]): number {
  const digits = onlyNumbers(base);

  const weights =
    typeof weight === 'number'
      ? Array(digits.length)
          .fill(0)
          .map((_, i) => weight - i)
      : weight;

  return digits.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
}
