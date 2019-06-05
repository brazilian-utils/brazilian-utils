import onlyNumbers from '@brazilian-utils/helper-only-numbers';

function numberToWeightArray(weight: number, length: number): number[] {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(weight - i);
  }

  return array;
}

function createChecksum(str: string, weights: number[]): number {
  return str
    .split('')
    .reduce(
      (acc, value, index) => acc + parseInt(value, 10) * weights[index],
      0
    );
}

export default function generateChecksum(
  base: string | number,
  weights: number | number[]
): number {
  const number = onlyNumbers(base);

  if (typeof weights === 'number') {
    return createChecksum(number, numberToWeightArray(weights, number.length));
  }

  if (Array.isArray(weights)) {
    return createChecksum(number, weights);
  }

  throw new Error('Invalid weight type. Should be an Array like or a Number');
}
