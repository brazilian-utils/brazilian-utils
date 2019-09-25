import { StateValidator } from "./stateValidator";

export class Tocantins extends StateValidator {

  protected checkLength(ie: string) : boolean {
    return ie.length === 11 || ie.length === 9;
  }

  protected itStartsWith(ie: string): boolean {
    return Boolean(ie);
  }
  protected calcIe(ie: string): boolean {
    return this.checkOld(ie) || this.checkNew(ie);
  }

  private checkOld(ie: string) : boolean
  {
    const body = ie.slice(0, 2) + ie.slice(4);
    return this.oldStartsWith(ie) && this.calcOld(body);
  }

  private oldStartsWith(ie: string) : boolean {
    const beginWith = ['01', '02', '03', '99'];
    const begin = ie.substr(2, 2);
    return beginWith.indexOf(begin) >= 0;
  }

  private calcOld(ie: string) : boolean {
    const length = ie.length;
    const position = length - 1;
    let weight = length;
    const body = ie.substr(0, position);
    let sum = 0;

    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });

    const rest = sum % 11;
    let dig = 11 - rest;
    if (dig >= 10) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  }

  private checkNew(ie: string) : boolean {
    return this.calcNew(ie);
  }

  private calcNew(ie: string) : boolean {
    const length = ie.length;
    const position = length - 1;
    let weight = 9;
    const body = ie.substr(0, position);
    let sum = 0;

    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });

    const rest = sum % 11;
    let dig = 11 - rest;
    if (rest < 2) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  }

}
