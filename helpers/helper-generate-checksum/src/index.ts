import onlyNumbers from '@brazilian-utils/helper-only-numbers';

export interface Checksum {
  readonly base: string | number;
  readonly weights: number | ReadonlyArray<number>;
}

function numberToWeightArray(
  weight: number,
  length: number
): ReadonlyArray<number> {
  return Array.from(Array<number>(length).keys()).map(
    (_, index) => weight - index
  );
}

function createChecksum(input: string, weights: ReadonlyArray<number>) {
  return input
    .split('')
    .reduce(
      (agg, value, index) => agg + parseInt(value, 10) * weights[index],
      0
    );
}

export default function generateChecksum(
  base: string | number,
  weights: number | ReadonlyArray<number>
): number {
  const numericBase = onlyNumbers(base);

  if (typeof weights === 'number') {
    return createChecksum(
      numericBase,
      numberToWeightArray(weights, numericBase.length)
    );
  }

  if (Array.isArray(weights)) {
    return createChecksum(numericBase, weights);
  }

  throw new Error('Invalid weight type. Should be an Array like or a Number');
}
