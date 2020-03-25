import { STATES_DATA } from '../../../common/states';

import { Validator } from './validator';

export class AC extends Validator {
  protected checkLength(ie: string): boolean {
    return ie.length === STATES_DATA.AC.ieLength;
  }

  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '01';
  }

  protected calcIe(ie: string): boolean {
    return this.calcDigits(ie);
  }

  private calcDigits(inscricaoEstadual: string): boolean {
    const length = inscricaoEstadual.length;
    const body = inscricaoEstadual.substr(0, length - 2);
    const fDig = this.calcDigit(body);
    const sDig = this.calcDigit(body + fDig.toString());
    const pos2dig = inscricaoEstadual.length - 1;
    const pos1dig = inscricaoEstadual.length - 2;
    return parseInt(inscricaoEstadual[pos1dig], 10) === fDig && parseInt(inscricaoEstadual[pos2dig], 10) === sDig;
  }

  private calcDigit(body: string): number {
    let weight = body.length - 7;
    let sum = 0;
    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
      if (weight === 1) {
        weight = 9;
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
