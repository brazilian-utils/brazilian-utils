import { onlyNumbers } from '..';

function numberToWeightArray(weight: number | number[], length: number): number[] {
  if (typeof weight === 'number') {
    return Array(length)
      .fill(0)
      .map((_, idx) => weight - idx);
  }

  return weight;
}

function createChecksum(input: string, weights: number[]): number {
  return input.split('').reduce((prev, curr, idx) => prev + parseInt(curr, 10) * weights[idx], 0);
}

export function generateChecksum(base: string | number, weights: number | number[]): number {
  const digits = onlyNumbers(base);

  return createChecksum(digits, numberToWeightArray(weights, digits.length));
}
