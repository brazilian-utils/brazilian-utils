import { STATE_LENGHT } from "../constants";
import { StateValidator } from "./stateValidator";

export class Pernambuco extends StateValidator {

  protected checkLength(ie: string) : boolean {
    return ie.length === STATE_LENGHT.PE;
  }

  protected itStartsWith(ie: string): boolean {
    return Boolean(ie);
  }
  protected calcIe(ie: string): boolean {
     return this.calcDigits(ie);
  }

  private calcDigits(ie: string) : boolean
  {
    const length = ie.length;
    const body = ie.substr(0, length - 2);

    const firstDig = this.calcDigit(body);
    const secondDig = this.calcDigit(body + firstDig);

    const posSecondDig = length - 1;
    const posFirstDig = length - 2;

    const ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10 );
    const ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10 );

    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
  }

  private calcDigit(body : string) : number {
    let weight = body.length + 1;
    let sum = 0;
    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });

    const mod = 11;
    const rest = sum % mod;
    let dig = mod - rest;
    if(dig >= 10) {
      dig = 0;
    }
    return dig;
  }

}
