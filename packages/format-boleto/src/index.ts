import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import isLastChar from '@brazilian-utils/helper-is-last-char';

import { BOLETO_LENGTH, BOLETO_CONVENIO_LENGTH, DOT_BOLETO, SPACE_BOLETO, DOT_BOLETO_CONVENIO } from './constants';

export function formatConvenio(boleto: string) {
  const digits = onlyNumbers(boleto);

  if (digits[0] !== '8') {
    throw new Error("Convênio boleto must start with '8'");
  }

  return digits
    .slice(0, BOLETO_CONVENIO_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if (DOT_BOLETO_CONVENIO.indexOf(index) >= 0) return `${result}.`;
      }

      return result;
    }, '');
}

export function formatBoleto(boleto: string) {
  const digits = onlyNumbers(boleto);

  return digits
    .slice(0, BOLETO_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, digits)) {
        if (DOT_BOLETO.indexOf(index) >= 0) return `${result}.`;
        if (SPACE_BOLETO.indexOf(index) >= 0) return `${result} `;
      }
      return result;
    }, '');
}

export default function format(boleto: string) {
  if (!boleto) return '';

  return boleto[0] === '8' ? formatConvenio(boleto) : formatBoleto(boleto);
}
