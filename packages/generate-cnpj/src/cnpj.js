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
