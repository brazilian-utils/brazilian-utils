import onlyNumbers from './onlyNumbers';

const numberToWeightArray = (weight: number, length: number) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(weight - i);
  }

  return array;
};

const createChecksum = (cpfStart: string, weights: number[]) => {
  return cpfStart
    .split('')
    .reduce(
      (agg, value, index) => agg + parseInt(value, 10) * weights[index],
      0
    );
};

export default function generateChecksum(
  base: string | number,
  weights: number | number[]
) {
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
