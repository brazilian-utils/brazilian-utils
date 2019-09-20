import { onlyNumbers } from '..';

export function numberToWeightArray(weight: number | number[], length: number) {
  if (typeof weight === 'number') {
    return Array<number>(length)
      .fill(0)
      .map((_, idx) => weight - idx);
  }

  return weight;
}

export function createChecksum(input: string, weights: number[]) {
  return input.split('').reduce((prev, curr, idx) => prev + parseInt(curr, 10) * weights[idx], 0);
}

export function generateChecksum(base: string | number, weights: number | number[]) {
  const digits = onlyNumbers(base);
  return createChecksum(digits, numberToWeightArray(weights, digits.length));
}
