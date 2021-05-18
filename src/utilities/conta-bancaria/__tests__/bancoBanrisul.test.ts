import { BankValidator } from "./bankValidator";

export class BancoBanrisulValidator extends BankValidator{

  protected isValidFormat(bankAccount: string): boolean {
    return /^\d{8}\-(\d{1}|x)$/.test(bankAccount);
  }

  protected checkDV(bankAccount: string): boolean {
    return true;
  }
}
