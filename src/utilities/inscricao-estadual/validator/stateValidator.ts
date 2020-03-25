export abstract class StateValidator {
  public isValid(ie: string): boolean {
    return this.checkLength(ie) && this.itStartsWith(ie) && this.calcIe(ie);
  }

  protected abstract checkLength(ie: string): boolean;

  protected abstract itStartsWith(ie: string): boolean;

  protected abstract calcIe(ie: string): boolean;
}
