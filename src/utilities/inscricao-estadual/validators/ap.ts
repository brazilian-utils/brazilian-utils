import { STATES_DATA } from '../../../common/states';

import { Validator } from './validator';

export class AP extends Validator {
  protected checkLength(ie: string): boolean {
    return ie.length === STATES_DATA.AP.ieLength;
  }

  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '03';
  }
  protected calcIe(ie: string): boolean {
    return this.calcDigit(ie);
  }

  protected calcDigit(ie: string): boolean {
    const length = ie.length;
    const position = length - 1;
    let weight = length;
    const body = ie.substr(0, position);
    const bodyInt = parseInt(body, 10);
    let p = 0;
    let d = 0;

    if (3000001 <= bodyInt && bodyInt <= 3017000) {
      p = 5;
      d = 0;
    } else if (bodyInt >= 3017001 && bodyInt <= 3019022) {
      p = 9;
      d = 1;
    }

    let sum = p;
    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    let dig = 11 - (sum % 11);
    if (dig === 10) {
      dig = 0;
    }

    if (dig === 11) {
      dig = d;
    }
    return dig === parseInt(ie.charAt(position), 10);
  }
}
