import onlyNumbers from '@brazilian-utils/helper-only-numbers';

const numberToWeightArray = (weight, length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(weight - i);
  }

  return array;
};

const createChecksum = (cpfStart, weights) =>
  cpfStart.split('').reduce((agg, value, index) => agg + parseInt(value, 10) * weights[index], 0);

export default function generateChecksum(base, weights) {
  const numericBase = onlyNumbers(base);

  if (weights.constructor === Number) {
    const weightsArray = numberToWeightArray(weights, numericBase.length);
    return createChecksum(numericBase, weightsArray);
  }

  if (weights.constructor === Array) {
    return createChecksum(numericBase, weights);
  }

  throw new Error('Invalid weight type. Should be an Array like or a Number');
}
