import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { BLACKLIST, TITULO_ELEITOR_LENGTH } from './constants';

const isValidLength = tituloEleitor => tituloEleitor.length === TITULO_ELEITOR_LENGTH;

const belongsToBlacklist = tituloEleitor => BLACKLIST.includes(tituloEleitor);

const modSum = (arr, weight) => arr.reduce((acc, digit) => weight < 10 ? acc + digit * weight++ : 0, 0) % 11;

const isValid = (arr, mod1, mod2) => (arr[10] === mod1 && arr[11] === mod2) && ((arr[8] + arr[9] > 0) && (arr[8] + arr[9] < 29));

const isValidChecksum = tituloEleitor => {
    const digits = Array.from(tituloEleitor).map(Number)

    return isValid(digits, modSum(digits.slice(0,8), 2), modSum(digits.slice(8,11), 7));
  };
  
export default function isValidTituloEleitor(tituloEleitor) {
  if (!tituloEleitor) return false;

  const numericTituloEleitor = onlyNumbers(tituloEleitor);

  return isValidLength(numericTituloEleitor) && !belongsToBlacklist(numericTituloEleitor) && isValidChecksum(numericTituloEleitor);
}

