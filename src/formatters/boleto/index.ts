import { isLastChar, onlyNumbers } from '../../helpers';

export const BOLETO_LENGTH = 47;

export const BOLETO_CONVENIO_LENGTH = 48;

export const DOT_INDEXES = [4, 14, 25];

export const SPACE_INDEXES = [9, 20, 31, 32];

export const CONVENIO_DOT_INDEXES = [11, 23, 35];

export function formatConvenio(input: string) {
  return input
    .slice(0, BOLETO_CONVENIO_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, input)) {
        if (CONVENIO_DOT_INDEXES.indexOf(index) >= 0) {
          return `${result}.`;
        }
      }

      return result;
    }, '');
}

export function formatBankSlip(input: string) {
  return input
    .slice(0, BOLETO_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, input)) {
        if (DOT_INDEXES.indexOf(index) >= 0) {
          return `${result}.`;
        }

        if (SPACE_INDEXES.indexOf(index) >= 0) {
          return `${result} `;
        }
      }

      return result;
    }, '');
}

export default function format(boleto: string) {
  if (!boleto) {
    return '';
  }

  const numericBoleto = onlyNumbers(boleto);

  const isConvenio = numericBoleto[0] === '8';

  return isConvenio
    ? formatConvenio(numericBoleto)
    : formatBankSlip(numericBoleto);
}
