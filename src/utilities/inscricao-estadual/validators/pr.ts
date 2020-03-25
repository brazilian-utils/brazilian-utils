import { STATES_DATA } from '../../../common/states';

import { Validator } from './validator';

export class PR extends Validator {
  protected checkLength(ie: string): boolean {
    return ie.length === STATES_DATA.PR.ieLength;
  }

  protected itStartsWith(ie: string): boolean {
    return Boolean(ie);
  }
  protected calcIe(ie: string): boolean {
    return this.calcDigits(ie);
  }

  private calcDigits(ie: string): boolean {
    const length = ie.length;
    const body = ie.substr(0, length - 2);

    const firstDig = this.calcDigit(body);
    const secondDig = this.calcDigit(body + firstDig);

    const posSecondDig = length - 1;
    const posFirstDig = length - 2;

    const ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10);
    const ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10);

    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
  }

  private calcDigit(body: string): number {
    let weight = body.length - 5;
    let sum = 0;
    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
      if (weight === 1) {
        weight = 7;
      }
    });

    const mod = 11;
    const rest = sum % mod;
    let dig = mod - rest;
    if (dig >= 10) {
      dig = 0;
    }
    return dig;
  }
}
