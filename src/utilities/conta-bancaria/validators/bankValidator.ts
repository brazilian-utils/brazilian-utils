export abstract class BankValidator {
  public isValid(bankAccount: string, bankAgency?: string): boolean {
    return this.isValidFormat(bankAccount,bankAgency) && this.checkDV(bankAccount, bankAgency);
  }

  protected abstract isValidFormat(bankAccount: string, bankAgency?: string): boolean;

  protected abstract checkDV(bankAccount: string, bankAgency?: string): boolean;
}
