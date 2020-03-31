import { STATES_DATA } from '../../../common/states';

import { Validator } from './validator';

export class AM extends Validator {
  protected checkLength(ie: string): boolean {
    return ie.length === STATES_DATA.AM.ieLength;
  }

  protected itStartsWith(ie: string): boolean {
    return Boolean(ie);
  }
  protected calcIe(ie: string): boolean {
    return this.calcDigit(ie);
  }

  protected calcDigit(ie: string): boolean {
    const length = ie.length;
    const position = length - 1;
    let weight = length;
    const body = ie.substr(0, position);
    let sum = 0;
    let dig = 0;
    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    if (sum < 11) {
      dig = 11 - sum;
    } else {
      const rest = sum % 11;
      dig = 11 - rest;
      if (dig >= 10) {
        dig = 0;
      }
    }
    return dig === parseInt(ie.charAt(position), 10);
  }
}
