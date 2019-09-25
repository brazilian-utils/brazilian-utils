import { STATE_LENGHT } from "../constants";
import { StateValidator } from "./stateValidator";

export class Ceara extends StateValidator {

  protected checkLength(ie: string) : boolean {
    return ie.length === STATE_LENGHT.CE;
  }

  protected itStartsWith(ie: string): boolean {
    return Boolean(ie);
  }
  protected calcIe(ie: string): boolean {
     return this.calcDigit(ie);
  }

  protected calcDigit(ie: string) : boolean
  {
    const length = ie.length;
    const position = length - 1;
    let weight = length;
    const body = ie.substr(0, position);
    let sum = 0;

    body.split('').forEach((digit) => {
      sum += parseInt(digit,10) * weight;
      weight--;
    });

    const rest = sum % 11;
    let dig = 11 - rest;
    if(dig >= 10){
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  }

}
