import generateChecksum from '@brazilian-utils/helper-generate-checksum';
import { CPF_LENGTH, State, STATES_CODE } from './constants';

const randomNumber = (length: number) =>
  Math.random()
    .toString()
    .substr(2, length);

export default function generateCpf({ state }: { state?: State } = {}) {
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
