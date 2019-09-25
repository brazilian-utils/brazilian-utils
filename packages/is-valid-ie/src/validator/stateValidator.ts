import { STATE_LENGHT } from "../constants";

export abstract class StateValidator {
  public isValidIE(ie: string) : boolean {
      return this.checkLength(ie) &&
             this.itStartsWith(ie) &&
             this.calcIe(ie);
  }

  protected checkLength(ie: string) : boolean {
     return ie.length === STATE_LENGHT.CE;
  }

  protected abstract itStartsWith(ie: string) : boolean;

  protected abstract calcIe(ie: string) : boolean;

}
