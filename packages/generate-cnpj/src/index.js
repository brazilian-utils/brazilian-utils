import {
  CNPJ_LENGTH,
  FIRST_DIGIT_WEIGHTS,
  SECOND_DIGIT_WEIGHTS,
  generateRandomNumbers,
  multiplyWeights,
  sumNumbers,
  calculateNthDigit,
  concatDigits,
} from './cnpj';

export default function generateCnpj() {
  const twelveNumbers = generateRandomNumbers(CNPJ_LENGTH - 2);
  const thirteenth = calculateNthDigit(sumNumbers(multiplyWeights(twelveNumbers, FIRST_DIGIT_WEIGHTS)));
  const fourteenth = calculateNthDigit(
    sumNumbers(multiplyWeights([...twelveNumbers, thirteenth], SECOND_DIGIT_WEIGHTS))
  );

  return concatDigits([...twelveNumbers, thirteenth, fourteenth]);
}
