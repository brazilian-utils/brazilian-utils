import isValidCnpj from '@brazilian-utils/is-valid-cnpj';

import { generateRandomNumbers, sumOfDigitsMultipliedByWeights, calculateNthDigit, concatDigits } from '../cnpj';
import { CNPJ_LENGTH, FIRST_DIGIT_WEIGHTS, SECOND_DIGIT_WEIGHTS } from '../constants';

describe('cnpj', () => {
  const block1 = [1, 1, 4, 4, 4, 7, 7, 7, 0, 0, 0, 1];
  const block2 = [1, 1, 4, 4, 4, 7, 7, 7, 0, 0, 0, 1, 6];

  test('Generate N random numbers', () => {
    expect(generateRandomNumbers(12).length).toBe(12);
  });

  test('Sum all numbers multiplied', () => {
    expect(sumOfDigitsMultipliedByWeights(block1, FIRST_DIGIT_WEIGHTS)).toBe(214);
    expect(sumOfDigitsMultipliedByWeights(block2, SECOND_DIGIT_WEIGHTS)).toBe(230);
  });

  test('Nth digit with quocient smaller than 2', () => {
    expect(calculateNthDigit(12)).toBe(0);
  });

  test('Nth digit with quocient greater than 2', () => {
    expect(calculateNthDigit(214)).toBe(6);
    expect(calculateNthDigit(230)).toBe(1);
  });

  test('Concat all numbers generated', () => {
    expect(concatDigits(['12', '3', '4'])).toBe('1234');
  });

  test('Manual CNPJ validation', () => {
    const firstBlock = [1, 1, 4, 4, 4, 7, 7, 7, 0, 0, 0, 1];

    const firstDigit = calculateNthDigit(sumOfDigitsMultipliedByWeights(firstBlock, FIRST_DIGIT_WEIGHTS));
    expect(firstDigit).toBe(6);

    const secondDigit = calculateNthDigit(
      sumOfDigitsMultipliedByWeights([...firstBlock, firstDigit], SECOND_DIGIT_WEIGHTS)
    );
    expect(secondDigit).toBe(1);

    const cnpj = concatDigits([firstBlock.join(''), firstDigit, secondDigit]);
    expect(cnpj.length).toBe(CNPJ_LENGTH);
    expect(cnpj).toBe('11444777000161');
    expect(isValidCnpj(cnpj)).toBe(true);
  });
});
