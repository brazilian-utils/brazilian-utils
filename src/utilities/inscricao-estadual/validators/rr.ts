import { STATES_DATA } from '../../../common/states';

import { Validator } from './validator';

export class RR extends Validator {
  protected checkLength(ie: string): boolean {
    return ie.length === STATES_DATA.RR.ieLength;
  }

  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '24';
  }

  protected calcIe(ie: string): boolean {
    return this.calcDigit(ie);
  }

  private calcDigit(ie: string): boolean {
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
