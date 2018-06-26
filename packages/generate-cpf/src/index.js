import { CPF_LENGTH, STATES_CODE } from './constants';

const replaceAt = (string, index, replace) => string.substring(0, index) + replace + string.substring(index + 1);

export default function generateCpf({ state } = {}) {
  const stateCode = Object.keys(STATES_CODE).includes(state)
    ? STATES_CODE[state]
    : Math.random()
        .toString()
        .substr(2, 1);

  const CPF_LENGHT_WITHOUT_VALIDATE_CODE = CPF_LENGTH - 2;
  const cpfStart = replaceAt(
    Math.random()
      .toString()
      .substr(2, CPF_LENGHT_WITHOUT_VALIDATE_CODE),
    CPF_LENGHT_WITHOUT_VALIDATE_CODE,
    stateCode
  );

  let check1 = cpfStart.split('').reduce((agg, value, index) => agg + parseInt(value, 10) * (10 - index), 0);

  check1 = (check1 * 10) % 11;

  let check2 = cpfStart.split('').reduce((agg, value, index) => agg + parseInt(value, 10) * (11 - index), 0);

  check2 = (check2 * 10) % 11;

  return `${cpfStart}${check1.toString()}${check2.toString()}`;
}
