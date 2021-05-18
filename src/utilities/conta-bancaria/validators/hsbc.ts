import { BankValidator } from "./bankValidator";

export class HSBCValidator extends BankValidator{
  private agencyMultiplicationWeights = [8,9,2,3];

  protected isValidFormat(bankAccount: string, agencyNumber:string): boolean {
    return /^\d{6}\-\d{1}$/.test(bankAccount) && /^\d{4}$/.test(agencyNumber);
  }

  protected checkDV(bankAccount: string, bankAgency:string): boolean {
    const accountNumber = bankAccount.split("-")[0];
    const verificationDigit = bankAccount.split("-")[1];
    return this.getAccountVerificationDigit(accountNumber, bankAgency) === verificationDigit;
 }

  private getAccountVerificationDigit(accountNumber:string, agencyNumber:string){
    const agencySum = agencyNumber.split("").map(Number).reduce((acc,cur,index) => acc + cur * this.agencyMultiplicationWeights[index],0);
    const accountSum = accountNumber.split("").map(Number).reduce((acc,cur,index) => acc + cur * (index + 4),0);
    const rest = (agencySum+accountSum)%11;
    if (rest === 10) return "0"
    return  rest.toString();
  }
}
