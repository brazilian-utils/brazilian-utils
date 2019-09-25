import { StateValidator } from "./stateValidator";

export class Bahia extends StateValidator {

  protected checkLength(ie: string) : boolean {
    return ie.length === 9 || ie.length === 8;
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
    const body = ie.substr(0, length -2);
    const mod = this.getModule(ie);
    const secondDig = this.calcDigit(body, mod);
    const firstDig = this.calcDigit(body + secondDig, mod);

    const posSecondDig = length - 1;
    const posFirstDig = length - 2;
    const ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10 );
    const ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10 );

    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
  }

  private getModule(ie: String) : number {
    let pos = 0;
    if(ie.length === 9) {
      pos = 1;
    }
    const charAt = parseInt(ie.substr(pos, 1), 10);
    const arr = [0, 1, 2, 3, 4, 5, 8];
    if (arr.indexOf(charAt) >= 0) {
        return 10;
    }
    return 11;
  }

  private calcDigit(body : string, mod: number) : number {
    let weight = body.length + 1;
    let sum = 0;
    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    const rest = sum % mod;
    let dig = mod - rest;
    if(dig >= 10) {
      dig = 0;
    }
    return dig;
  }

}
