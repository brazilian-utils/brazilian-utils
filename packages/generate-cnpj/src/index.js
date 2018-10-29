import generateChecksum from '@brazilian-utils/helper-generate-checksum';

import { CNPJ_LENGTH, FIRST_DIGIT_WEIGHTS, SECOND_DIGIT_WEIGHTS } from './constants';

export const generateRandomNumbers = n =>
  Array(n)
    .fill(0)
    .map(() =>
      Math.random()
        .toString()
        .substr(2, 1)
    )
    .map(number => parseInt(number, 10));

export const sumOfDigitsMultipliedByWeights = (numbers, weights) => generateChecksum(numbers, weights);

export const calculateNthDigit = sum => {
  const mod = sum % 11;

  return Math.abs(mod < 2 ? 0 : mod - 11);
};

export const concatDigits = digits => digits.reduce((string, digit) => string + digit, '');

export default function generateCnpj() {
  const twelveNumbers = generateRandomNumbers(CNPJ_LENGTH - 2);
  const thirteenth = calculateNthDigit(sumOfDigitsMultipliedByWeights(twelveNumbers, FIRST_DIGIT_WEIGHTS));
  const fourteenth = calculateNthDigit(
    sumOfDigitsMultipliedByWeights([...twelveNumbers, thirteenth], SECOND_DIGIT_WEIGHTS)
  );

  return concatDigits([...twelveNumbers, thirteenth, fourteenth]);
}
