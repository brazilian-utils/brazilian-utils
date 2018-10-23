import generateChecksum from '@brazilian-utils/helper-generate-checksum';

export const generateRandomNumbers = n =>
  Array(n)
    .fill(0)
    .map(() =>
      Math.random()
        .toString()
        .substr(2, 1)
    );

export const sumOfDigitsMultipliedByWeights = (numbers, weights) => generateChecksum(numbers, weights);

export const calculateNthDigit = sum => {
  const mod = sum % 11;

  return Math.abs(mod < 2 ? 0 : mod - 11);
};

export const concatDigits = digits => digits.reduce((string, digit) => string + digit, '');
