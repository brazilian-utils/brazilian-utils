import onlyNumbers from '../../helpers/onlyNumbers';

export const PARTIALS_TO_VERIFY_MOD_10 = [
  {
    start: 0,
    end: 9,
    digitIndex: 9,
  },
  {
    start: 10,
    end: 20,
    digitIndex: 20,
  },
  {
    start: 21,
    end: 31,
    digitIndex: 31,
  },
];

export const DIGITABLE_LINE_LENGTH = 47;

export const CHECK_DIGIT_MOD_11_POSITION = 4;

export const MOD_11_WEIGHTS = {
  initial: 2,
  end: 9,
  increment: 1,
};

export const MOD_10_WEIGHTS = [2, 1];

export const DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS = [
  { start: 0, end: 4 },
  { start: 32, end: 47 },
  { start: 4, end: 9 },
  { start: 10, end: 20 },
  { start: 21, end: 31 },
];

const isValidLength = (digitableLine: string) =>
  digitableLine.length === DIGITABLE_LINE_LENGTH;

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

      weight =
        weight < MOD_11_WEIGHTS.end ? weight + 1 : MOD_11_WEIGHTS.initial;

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

const parseDigitableLine = (digitableLine: string) => {
  return DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS.reduce(
    (acc, pos) => acc + digitableLine.substring(pos.start, pos.end),
    ''
  );
};

const validateMod11CheckDigit = (parsedLine: string) => {
  const mod = mod11(
    parsedLine.slice(0, CHECK_DIGIT_MOD_11_POSITION) +
      parsedLine.slice(CHECK_DIGIT_MOD_11_POSITION + 1)
  );

  return +parsedLine[CHECK_DIGIT_MOD_11_POSITION] === mod;
};

export default function isValidBoleto(digitableLine: string) {
  const clearValue = onlyNumbers(digitableLine);

  if (!isValidLength(clearValue)) {
    return false;
  }

  if (!validateDigitableLinePartials(clearValue)) {
    return false;
  }

  return validateMod11CheckDigit(parseDigitableLine(clearValue));
}
