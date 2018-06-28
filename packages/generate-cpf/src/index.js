import { CPF_LENGTH, STATES_CODE } from './constants';

const createCheckSum = (cpfStart, base) =>
  cpfStart.split('').reduce((agg, value, index) => agg + parseInt(value, 10) * (base - index), 0);

const randomNumber = length =>
  Math.random()
    .toString()
    .substr(2, length);

export default function generateCpf({ state } = {}) {
  const stateCode = Object.keys(STATES_CODE).includes(state) ? STATES_CODE[state] : randomNumber(1);
  const baseCpf = randomNumber(CPF_LENGTH - 3) + stateCode;

  const mod1 = createCheckSum(baseCpf, 10) % 11;
  const check1 = (mod1 < 2 ? 0 : 11 - mod1).toString();

  const mod2 = createCheckSum(baseCpf + check1, 11) % 11;
  const check2 = (mod2 < 2 ? 0 : 11 - mod2).toString();

  return `${baseCpf}${check1.toString()}${check2.toString()}`;
}
