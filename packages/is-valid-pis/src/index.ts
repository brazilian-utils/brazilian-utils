import { BLACKLIST, PIS_LENGTH, WEIGHTS } from './constants';

// Based on http://www.macoratti.net/alg_pis.htm

export function isValidPis(pis: string): boolean {
  if (typeof pis !== 'string') {
    return false;
  }

  const cleanPis: string = removeSeparators(pis);
  const length: number = cleanPis.length;

  if (length !== PIS_LENGTH || !hasOnlyNumbers(cleanPis) || BLACKLIST.includes(cleanPis)) {
    return false;
  }

  let weighthedSum: number = 0;
  const lengthWithoutLastDigit: number = length - 1;
  for (let i = 0; i < lengthWithoutLastDigit; i++) {
    weighthedSum += +cleanPis.charAt(i) * WEIGHTS[i];
  }

  const verifyingDigit: number = +cleanPis.charAt(length - 1);
  const calculatedDigit: number = 11 - (weighthedSum % 11);

  return calculatedDigit === verifyingDigit
    || (calculatedDigit === 10 && verifyingDigit === 0)
    || (calculatedDigit === 11 && verifyingDigit === 0);
}

function removeSeparators(text: string): string {
  return text.replace(/[ \(\).,*-]/g,  '');
}

function hasOnlyNumbers(text: string): boolean {
  return !!text.match(/^[0-9]+$/);
}