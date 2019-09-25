import { Ceara } from "./ceara";

export class Para extends Ceara {
  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '15';
  }

}
