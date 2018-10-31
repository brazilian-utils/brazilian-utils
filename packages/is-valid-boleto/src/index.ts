import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import {
  CHECK_DIGIT_MOD_11_POSITION,
  DIGITABLE_LINE_LENGTH,
  MOD_10_WEIGHTS,
  MOD_11_WEIGHTS,
  PARTIALS_TO_VERIFY_MOD_10,
  DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS,
} from './constants';

const isValidLength = (digitableLine: string) => digitableLine.length === DIGITABLE_LINE_LENGTH;

const mod10 = (partial: string) => {
  const weights = MOD_10_WEIGHTS;

  const sum = partial
    .split('')
    .reverse()
    .reduce((acc, digit, index) => {
      const mult = parseInt(digit, 10) * weights[index % 2];
      return acc + (mult > 9 ? 1 + (mult % 10) : mult);
    }, 0);

  const mod = sum % 10;

  return mod > 0 ? 10 - mod : 0;
};

const mod11 = (value: string) => {
  let weight = MOD_11_WEIGHTS.initial;

  const sum = value
    .split('')
    .reverse()
    .reduce((acc, digit) => {
      const mult = parseInt(digit, 10) * weight;

      weight = weight < MOD_11_WEIGHTS.end ? weight + 1 : MOD_11_WEIGHTS.initial;

      return acc + mult;
    }, 0);

  const mod = sum % 11;

  return mod === 0 || mod === 1 ? 1 : 11 - mod;
};

const validateDigitableLinePartials = (digitableLine: string) => {
  const isValid = PARTIALS_TO_VERIFY_MOD_10.every(partial => {
    const mod = mod10(digitableLine.substring(partial.start, partial.end));
    return +digitableLine[partial.digitIndex] === mod;
  });

  return isValid;
};

const parseDigitableLine = (digitableLine: string) =>
  DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS.reduce(
    (acc, pos) => acc + digitableLine.substring(pos.start, pos.end),
    ''
  );

const validateMod11CheckDigit = (parsedLine: string) => {
  const mod = mod11(
    parsedLine.slice(0, CHECK_DIGIT_MOD_11_POSITION) + parsedLine.slice(CHECK_DIGIT_MOD_11_POSITION + 1)
  );
  return +parsedLine[CHECK_DIGIT_MOD_11_POSITION] === mod;
};

export default function isValidBoleto(digitableLine: string) {
  const clearValue = onlyNumbers(digitableLine);

  if (!isValidLength(clearValue)) return false;

  if (!validateDigitableLinePartials(clearValue)) return false;

  const parsedValue = parseDigitableLine(clearValue);

  return validateMod11CheckDigit(parsedValue);
}
