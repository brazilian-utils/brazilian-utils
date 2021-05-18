import { BankValidator } from "./bankValidator";

export class CaixaEconomicaFederalValidator extends BankValidator{
  protected isValidFormat(bankAccount: string, agencyNumber:string): boolean {
    return /^\d{11}\-\d{1}$/.test(bankAccount) && /^\d{4}$/.test(agencyNumber);
 }

  protected checkDV(bankAccount: string,  agencyNumber:string): boolean {
    const account = bankAccount.split("-")[0];
    const accountType = account.slice(0,3);
    const accountNumber = account.slice(-8)
    const verificationDigit = bankAccount.split("-")[1];
    return this.getAccountVerificationDigit(accountNumber, agencyNumber, accountType) === verificationDigit;
  }

  private getAccountVerificationDigit(accountNumber:string, agencyNumber:string, accountType: string){
    const agencySum = agencyNumber.split("").map(Number).reduce((acc,cur,index)=> acc + cur * (8 - index),0);
    const accountTypeSum = accountType.split("").map(Number).reduce((acc,cur,index)=> acc + cur * (4 - index),0);
    const accountNumberSum = accountNumber.split("").map(Number).reduce((acc,cur,index)=> acc + cur * (9 - index),0);
    const sum = (agencySum + accountNumberSum + accountTypeSum)* 10
    const mod = Math.trunc(sum/11);
    const rest = Math.abs(mod * 11 - sum)
    return  (rest === 10 ? 0: rest).toString();
  }
}
