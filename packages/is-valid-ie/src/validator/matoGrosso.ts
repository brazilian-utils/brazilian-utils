import { STATE_LENGHT } from "../constants";
import { StateValidator } from "./stateValidator";

export class MatoGrosso extends StateValidator {

  protected checkLength(ie: string) : boolean {
    return ie.length === STATE_LENGHT.MT;
  }

  protected itStartsWith(ie: string): boolean {
    return Boolean(ie);
  }
  protected calcIe(ie: string): boolean {
     return this.calcDigit(ie);
  }

  private calcDigit(ie: string) : boolean
  {
    const length = ie.length;
    const position = length - 1;
    let weight = 3;
    const body = ie.substr(0, position);
    let sum = 0;

    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
      if(weight === 1) {
        weight = 9;
      }
    });

    const rest = sum % 11;
    let dig = 11 - rest;

    if(dig >= 10) {
        dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  }

}
