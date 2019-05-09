import generateChecksum from '@brazilian-utils/helper-generate-checksum';
import { BLACKLIST, PIS_LENGTH, WEIGHTS } from './constants';

// Based on http://www.macoratti.net/alg_pis.htm

function removeSeparators(text: string): string {
  return text.replace(/[ \(\).,*-]/g,  '');
}

function hasOnlyNumbers(text: string): boolean {
  return !!text.match(/^[0-9]+$/);
}

export function isValidPis(pis: string): boolean {
  if (typeof pis !== 'string') {
    return false;
  }

  const cleanPis: string = removeSeparators(pis);
  const length: number = cleanPis.length;

  if (length !== PIS_LENGTH || !hasOnlyNumbers(cleanPis) || BLACKLIST.includes(cleanPis)) {
    return false;
  }

  const weightedChecksum: number = generateChecksum(cleanPis.substr(0, length - 1), WEIGHTS);
  const verifyingDigit: number = +cleanPis.charAt(length - 1);
  const calculatedDigit: number = 11 - (weightedChecksum % 11);

  return calculatedDigit === verifyingDigit
    || (calculatedDigit === 10 && verifyingDigit === 0)
    || (calculatedDigit === 11 && verifyingDigit === 0);
}