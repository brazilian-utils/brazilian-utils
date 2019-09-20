import { State, STATES, STATES_CODE } from '../common/states';
import { onlyNumbers, isLastChar, randomNumber, generateChecksum } from '../helpers';

export const CPF_LENGTH = 11;
export const DOT_INDEXES = [2, 5];
export const HYPHEN_INDEXES = [8];

export function formatCPF(cpf: string) {
  const digits = onlyNumbers(cpf);

  return digits
    .slice(0, CPF_LENGTH)
    .split('')
    .reduce((prev, curr, idx) => {
      const result = `${prev}${curr}`;

      if (!isLastChar(idx, digits)) {
        if (DOT_INDEXES.indexOf(idx) >= 0) return `${result}.`;
        if (HYPHEN_INDEXES.indexOf(idx) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}

export function generateCPF(state?: State) {
  const stateCode = state && STATES.includes(state) ? STATES_CODE[state] : randomNumber(1);
  const baseCPF = randomNumber(CPF_LENGTH - 3) + stateCode;

  const mod1 = generateChecksum(baseCPF, 10) % 11;
  const check1 = (mod1 < 2 ? 0 : 11 - mod1).toString();

  const mod2 = generateChecksum(baseCPF + check1, 11) % 11;
  const check2 = (mod2 < 2 ? 0 : 11 - mod2).toString();

  return `${baseCPF}${check1.toString()}${check2.toString()}`;
}
