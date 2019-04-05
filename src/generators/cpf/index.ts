import generateChecksum from '../../helpers/generateChecksum';

export const CPF_LENGTH = 11; // TODO: refactor, already exists in other packages

export type State = keyof typeof STATES_CODE;

export const STATES_CODE = {
  RS: '0',
  DF: '1',
  GO: '1',
  MT: '1',
  MS: '1',
  TO: '1',
  AM: '2',
  PA: '2',
  RR: '2',
  AP: '2',
  AC: '2',
  RO: '2',
  CE: '3',
  MA: '3',
  PI: '3',
  PB: '4',
  PE: '4',
  AL: '4',
  RN: '4',
  BA: '5',
  SE: '5',
  MG: '6',
  RJ: '7',
  ES: '7',
  SP: '8',
  PR: '9',
  SC: '9',
};

const randomNumber = (length: number) =>
  Math.random()
    .toString()
    .substr(2, length);

export const STATES = Object.keys(STATES_CODE) as State[];

export default function generate({ state }: { state?: State } = {}) {
  const stateCode =
    state && Object.keys(STATES_CODE).includes(state)
      ? STATES_CODE[state]
      : randomNumber(1);

  const baseCpf = randomNumber(CPF_LENGTH - 3) + stateCode;

  const mod1 = generateChecksum(baseCpf, 10) % 11;
  const check1 = (mod1 < 2 ? 0 : 11 - mod1).toString();

  const mod2 = generateChecksum(baseCpf + check1, 11) % 11;
  const check2 = (mod2 < 2 ? 0 : 11 - mod2).toString();

  return `${baseCpf}${check1.toString()}${check2.toString()}`;
}
