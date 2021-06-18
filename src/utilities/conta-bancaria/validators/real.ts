import { BankValidator } from "./bankValidator";

export class RealValidator extends BankValidator{

  private multiplicationWeights = [8,1,4,7,2,2,5,9,3,9,5];

  protected isValidFormat(bankAccount: string, agencyNumber:string): boolean {
    return /^\d{7}\-\d{1}$/.test(bankAccount) && /^\d{4}$/.test(agencyNumber);
  }

  protected checkDV(bankAccount: string, bankAgency:string): boolean {
    const accountNumber = bankAccount.split("-")[0];
    const verificationDigit = bankAccount.split("-")[1];
    return this.getAccountVerificationDigit(accountNumber, bankAgency) === verificationDigit;
 }

  private getAccountVerificationDigit(accountNumber:string, agencyNumber:string){
    const sum = `${agencyNumber}${accountNumber}`.split("").map(Number).reduce((acc,cur,index) => acc + cur * this.multiplicationWeights[index],0);
    const rest = (sum - Math.trunc(sum / 11) * 11);

    if (rest === 1) return "0"
    if (rest === 0) return "1"
    return  (11 - rest).toString();
  }
}
