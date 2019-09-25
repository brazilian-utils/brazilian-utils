import { StateValidator } from "./stateValidator";
import { STATE_LENGHT } from "../constants";

export class SaoPaulo extends StateValidator {

  protected checkLength(ie: string) : boolean {
    return ie.length === STATE_LENGHT.SP ;
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
    const positionFirstDigit = length - 4;
    const positionSecondDigit = length - 1;

    const firstDigit = this.calcFirstDigit(ie);
    const secondDigit = this.calcSecondDigit(ie);

    const ieAtFirstPos = parseInt(ie.charAt(positionFirstDigit), 10 );
    const ieAtSecondPos = parseInt(ie.charAt(positionSecondDigit), 10 );

    return firstDigit === ieAtFirstPos && secondDigit === ieAtSecondPos;
  }

  private calcFirstDigit(ie: string) : number {
    const body = ie.substr(0, 8);
    const weight = [1, 3, 4, 5, 6, 7, 8, 10];
    let sum = 0;
    body.split('').forEach((digit, index) => {
      sum += parseInt(digit, 10) * weight[index];
    });

    const dig = sum % 11;
    const digit = dig.toString();

    return parseInt(digit.substr(digit.length -1, 1), 10);
  }

  private calcSecondDigit(ie: string) : number {
    const body = ie.substr(0, 11);
    let weight = 3;
    let sum = 0;
    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
      if(weight === 1 ) {
        weight = 10;
      }
    });
    const dig = sum % 11;
    const digit = dig.toString();

    return parseInt(digit.substr(digit.length -1, 1), 10);
  }
}
