import onlyNumbers from '@brazilian-utils/helper-only-numbers';

export interface Checksum {
  readonly base: string | number;
  readonly weights: number | ReadonlyArray<number>;
}

const numberToWeightArray = (
  weight: number,
  length: number
): ReadonlyArray<number> => {
  return Array.from(Array<number>(length).keys()).map((_, i) => weight - i);
};

const createChecksum = (cpfStart: string, weights: ReadonlyArray<number>) => {
  return cpfStart
    .split('')
    .reduce(
      (agg, value, index) => agg + parseInt(value, 10) * weights[index],
      0
    );
};

export default function generateChecksum(
  base: string | number,
  weights: number | ReadonlyArray<number>
): number {
  const numericBase = onlyNumbers(base);

  if (typeof weights === 'number') {
    const weightsArray = numberToWeightArray(weights, numericBase.length);
    return createChecksum(numericBase, weightsArray);
  }

  if (Array.isArray(weights)) {
    return createChecksum(numericBase, weights);
  }

  throw new Error('Invalid weight type. Should be an Array like or a Number');
}
