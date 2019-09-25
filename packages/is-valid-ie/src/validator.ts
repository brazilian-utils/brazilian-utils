import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import { StateFactory } from "./ServiceFactory";
export class Validator {
  static check(uf: string, inscricaoEstadual: string) {
      const numericIE = onlyNumbers(inscricaoEstadual);
      const factory = new StateFactory();
      const state = factory.makeState(uf);
      return state.isValidIE(numericIE);
  }
}
