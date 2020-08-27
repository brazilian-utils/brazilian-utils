import { onlyNumbers } from '../../helpers';

export const MIN_LENGTH = 9;
export const LENGTH = 11;
export const SUM = 284;

export const isValid = (input: string) => {
  if (!input || typeof input !== 'string' || input.length < MIN_LENGTH) return false;

  let result = onlyNumbers(input.padStart(11, '0'));

  if (!result.match('[0-9]{11}')) return false;

  let resultWithoutDigit = result.substring(0, 10);
  resultWithoutDigit = resultWithoutDigit.split('').reverse().join('');

  const sum = sumCalculationRest(resultWithoutDigit);

  const realDigit = parseInt(input.substring(input.length - 1, input.length));

  return sum === realDigit;
};

const sumCalculationRest = (input: string) => {
  let sum = 0;
  let multiple = 2;

  for (let i = 0; i < 10; i++) {
    sum += parseInt(input.substring(i, i + 1)) * multiple;

    if (multiple >= 9) {
      multiple = 2;
    } else {
      multiple++;
    }
  }

  sum = LENGTH - (sum % LENGTH);

  return sum;
};

//https://github.com/eliseuborges/Renavam/blob/master/Renavam.js
