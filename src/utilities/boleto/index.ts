import { onlyNumbers, isLastChar } from '../../helpers';

export const PARTIALS = [
  {
    end: 9,
    start: 0,
    index: 9,
  },
  {
    end: 20,
    start: 10,
    index: 20,
  },
  {
    end: 31,
    start: 21,
    index: 31,
  },
];

export const DOT_INDEXES = [4, 14, 25];

export const SPACE_INDEXES = [9, 20, 31, 32];

export const LENGTH = 47;

export const CHECK_DIGIT_POSITION = 4;

export const MOD_11_WEIGHTS = {
  end: 9,
  initial: 2,
};

export const MOD_10_WEIGHTS = [2, 1];

export const DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS = [
  { end: 4, start: 0 },
  { end: 47, start: 32 },
  { end: 9, start: 4 },
  { end: 20, start: 10 },
  { end: 31, start: 21 },
];

export interface Boleto {
  value: number;
  expirationDate: Date;
}

function isValidLength(digitableLine: string): boolean {
  return digitableLine.length === LENGTH;
}

function mod10(partial: string): number {
  const sum = partial
    .split('')
    .reverse()
    .reduce((acc, digit, index) => {
      const result = parseInt(digit, 10) * MOD_10_WEIGHTS[index % 2];

      return acc + (result > 9 ? 1 + (result % 10) : result);
    }, 0);

  const mod = sum % 10;

  return mod > 0 ? 10 - mod : 0;
}

function mod11(value: string): number {
  const { initial, end } = MOD_11_WEIGHTS;

  let weight = initial;

  const sum = value
    .split('')
    .reverse()
    .reduce((acc, digit) => {
      const result = parseInt(digit, 10) * weight;
      weight = weight < end ? weight + 1 : initial;

      return acc + result;
    }, 0);

  const mod = sum % 11;

  return mod === 0 || mod === 1 ? 1 : 11 - mod;
}

function isValidPartials(digitableLine: string): boolean {
  return PARTIALS.every(({ start, end, index }) => {
    const mod = mod10(digitableLine.substring(start, end));

    return +digitableLine[index] === mod;
  });
}

function parse(digitableLine: string): string {
  return DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS.reduce(
    (acc, pos) => acc + digitableLine.substring(pos.start, pos.end),
    ''
  );
}

function isValidCheckDigit(parsedDigitableLine: string): boolean {
  const mod = mod11(
    parsedDigitableLine.slice(0, CHECK_DIGIT_POSITION) + parsedDigitableLine.slice(CHECK_DIGIT_POSITION + 1)
  );

  return +parsedDigitableLine[CHECK_DIGIT_POSITION] === mod;
}

export function isValid(digitableLine: string): boolean {
  if (!digitableLine || typeof digitableLine !== 'string') return false;

  const digits = onlyNumbers(digitableLine);

  if (!isValidLength(digits)) return false;

  if (!isValidPartials(digits)) return false;

  const parsedDigits = parse(digits);

  return isValidCheckDigit(parsedDigits);
}

export function format(boleto: string) {
  const digits = onlyNumbers(boleto);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if (DOT_INDEXES.indexOf(index) >= 0) return `${result}.`;
        if (SPACE_INDEXES.indexOf(index) >= 0) return `${result} `;
      }

      return result;
    }, '');
}

export function getValueInCents(digitableLine: string): number {
  if (!digitableLine || !isValid(digitableLine)) return 0;

  const digits = onlyNumbers(digitableLine);

  const valueStartIndex = digits.length - 10;

  return Number(digits.substr(valueStartIndex));
}

export function getExpirationDate(digitableLine: string): Date | null {
  if (!digitableLine || !isValid(digitableLine)) return null;

  const firstDay = new Date(1997, 9, 7);

  const daysSinceFirstDay = digitableLine.substr(digitableLine.length - 14, 4);
  const dateSinceFirstDay = new Date(Number(daysSinceFirstDay) * 24 * 60 * 60 * 1000);

  return new Date(dateSinceFirstDay.getTime() + firstDay.getTime());
}

export function getBankCode(digitableLine: string): string {
  if (!digitableLine || !isValid(digitableLine)) return '';

  return digitableLine.substr(0, 3);
}