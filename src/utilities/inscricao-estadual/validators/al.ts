import { STATES_DATA } from '../../../common/states';

import { Validator } from './validator';

export class AL extends Validator {
  protected checkLength(ie: string): boolean {
    return ie.length === STATES_DATA.AL.ieLength;
  }

  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '24';
  }
  protected calcIe(ie: string): boolean {
    return this.digitCalc(ie);
  }

  private digitCalc(ie: string) {
    let weight = 9;
    const position = 8;
    let sum = 0;
    for (let i = 0; i < position; i++) {
      sum += parseInt(ie.charAt(i), 10) * weight;
      weight--;
    }
    const product = sum * 10;
    let digit = product - Math.floor(product / 11) * 11;
    if (digit >= 10) {
      digit = 0;
    }
    return digit === parseInt(ie.charAt(position), 10);
  }
}
