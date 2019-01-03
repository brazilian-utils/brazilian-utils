import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import isLastChar from '@brazilian-utils/helper-is-last-char';

import { BOLETO_LENGTH, BOLETO_CONVENIO_LENGTH, DOT_BOLETO, SPACE_BOLETO, DOT_BOLETO_CONVENIO } from './constants';

export default function formatBoleto(boleto: string) {
  if (!boleto) return '';

  const numericBoleto = onlyNumbers(boleto);

  const isConvenio = numericBoleto.indexOf('8') === 0;

  return isConvenio
    ? numericBoleto
        .slice(0, BOLETO_CONVENIO_LENGTH)
        .split('')
        .reduce((acc, digit, index) => {
          const result = `${acc}${digit}`;
          if (!isLastChar(index, numericBoleto)) {
            if (DOT_BOLETO_CONVENIO.includes(index)) return `${result}.`;
          }
          return result;
        }, '')
    : numericBoleto
        .slice(0, BOLETO_LENGTH)
        .split('')
        .reduce((acc, digit, index) => {
          const result = `${acc}${digit}`;
          if (!isLastChar(index, numericBoleto)) {
            if (DOT_BOLETO.includes(index)) return `${result}.`;
            if (SPACE_BOLETO.includes(index)) return `${result} `;
          }
          return result;
        }, '');
}
