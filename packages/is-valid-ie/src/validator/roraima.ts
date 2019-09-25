import { StateValidator } from "./stateValidator";
import { STATE_LENGHT } from "../constants";

export class Roraima extends StateValidator {

  protected checkLength(ie: string) : boolean {
    return ie.length === STATE_LENGHT.RR ;
  }

  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '24';
  }

  protected calcIe(ie: string): boolean {
     return this.calcDigit(ie);
  }

  private calcDigit(ie: string) : boolean
  {
    const length = ie.length;
    const position = length - 1;
    let weight = 1;
    const body = ie.substr(0, position);
    let sum = 0;

    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight++;
    });

    const dig = sum % 9;
    return dig === parseInt(ie.charAt(position), 10);
  }
}
