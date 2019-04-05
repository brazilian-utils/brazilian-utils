import generateChecksum from '../../helpers/generateChecksum';

export const CNPJ_LENGTH = 14; // FIXME: Refactor, this code is duplicated
export const FIRST_DIGIT_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
export const SECOND_DIGIT_WEIGHTS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

export const generateRandomNumbers = (n: number) =>
  Array(n)
    .fill(0)
    .map(() =>
      Math.random()
        .toString()
        .substr(2, 1)
    )
    .map(num => parseInt(num, 10));

export const sumOfDigitsMultipliedByWeights = (
  numbers: number[],
  weights: number[]
) => {
  return generateChecksum(numbers.reduce((a, b) => a + b, ''), weights);
};

export const calculateNthDigit = (sum: number) => {
  const mod = sum % 11;
  return Math.abs(mod < 2 ? 0 : mod - 11);
};

export const concatDigits = (digits: Array<string | number>) => {
  return digits.reduce((str: string, digit) => str + digit, '');
};

export default function generateCnpj() {
  const twelveNumbers = generateRandomNumbers(CNPJ_LENGTH - 2);

  const thirteenth = calculateNthDigit(
    sumOfDigitsMultipliedByWeights(twelveNumbers, FIRST_DIGIT_WEIGHTS)
  );

  const fourteenth = calculateNthDigit(
    sumOfDigitsMultipliedByWeights(
      [...twelveNumbers, thirteenth],
      SECOND_DIGIT_WEIGHTS
    )
  );

  return concatDigits([...twelveNumbers, thirteenth, fourteenth]) as string;
}
