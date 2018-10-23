export const CNPJ_LENGTH = 14;

export const FIRST_DIGIT_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

export const SECOND_DIGIT_WEIGHTS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

export const generateRandomNumbers = n =>
  Array(n)
    .fill(0)
    .map(() =>
      Math.random()
        .toString()
        .substr(2, 1)
    );

export const multiplyWeights = (numbers, weights) => numbers.map((number, index) => number * weights[index]);

export const sumNumbers = numbers => numbers.reduce((sum, number) => sum + number);

export const calculateNthDigit = sum => {
  const mod = sum % 11;

  return Math.abs(mod < 2 ? 0 : mod - 11);
};

export const concatDigits = digits => digits.reduce((string, digit) => string + digit, '');
