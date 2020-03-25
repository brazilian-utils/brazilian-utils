import { validateIE } from './validator';
import { State } from '../../common/states';
export function isValid(uf: State, inscricaoEstadual: string) {
  return validateIE(uf, inscricaoEstadual);
}
