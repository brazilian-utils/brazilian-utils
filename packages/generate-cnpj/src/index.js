import { generateRandomNumbers, sumOfDigitsMultipliedByWeights, calculateNthDigit, concatDigits } from './cnpj';
import { CNPJ_LENGTH, FIRST_DIGIT_WEIGHTS, SECOND_DIGIT_WEIGHTS } from './constants';

export default function generateCnpj() {
  const twelveNumbers = generateRandomNumbers(CNPJ_LENGTH - 2);
  const thirteenth = calculateNthDigit(sumOfDigitsMultipliedByWeights(twelveNumbers, FIRST_DIGIT_WEIGHTS));
  const fourteenth = calculateNthDigit(
    sumOfDigitsMultipliedByWeights([...twelveNumbers, thirteenth], SECOND_DIGIT_WEIGHTS)
  );

  return concatDigits([...twelveNumbers, thirteenth, fourteenth]);
}
