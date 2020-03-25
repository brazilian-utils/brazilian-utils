import { onlyNumbers } from '../../helpers';
import { makeState } from './stateFactory';
import { State } from '../../common/states';

export function validateIE(uf: State, inscricaoEstadual: string) {
  const numericIE = onlyNumbers(inscricaoEstadual);
  const state = makeState(uf);
  return state.isValid(numericIE);
}
