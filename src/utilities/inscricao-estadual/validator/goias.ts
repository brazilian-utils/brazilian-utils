import { STATES_DATA } from '../../../common/states';
import { StateValidator } from './stateValidator';

export class Goias extends StateValidator {
  protected checkLength(ie: string): boolean {
    return ie.length === STATES_DATA.GO.ieLength;
  }

  protected itStartsWith(ie: string): boolean {
    const beginWith = ['10', '11', '12'];
    const begin = ie.substr(0, 2);
    return beginWith.indexOf(begin) >= 0;
  }
  protected calcIe(ie: string): boolean {
    return this.calcDigit(ie);
  }

  private calcDigit(ie: string): boolean {
    const length = ie.length;
    const position = length - 1;
    let weight = length;
    const body = ie.substr(0, position);
    const bodyInt = parseInt(body, 10);
    let sum = 0;

    body.split('').forEach(digit => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });

    const rest = sum % 11;
    let dig = 11 - rest;

    if (dig >= 10) {
      if (dig === 11 && 10103105 <= bodyInt && bodyInt <= 10119997) {
        dig = 1;
      } else {
        dig = 0;
      }
    }

    return dig === parseInt(ie.charAt(position), 10);
  }
}
