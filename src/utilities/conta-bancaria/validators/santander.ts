import { BankValidator } from "./bankValidator";

export class SantanderValidator extends BankValidator{
  private accountTypes = ["01","02","03","05","07","09","13","27","35","37","43","45","46","48","50","53","60","92"];
  private agencyMultypliers = [9,7,3,1];
  private accountMultypliers = [9,7,1,3,1,9,7,3];

  protected isValidFormat(bankAccount: string, bankAgency:string): boolean {
    return this.checkAccountType(bankAccount) && /^\d{8}\-\d{1}$/.test(bankAccount) && /^\d{4}$/.test(bankAgency);
 }

 protected checkDV(bankAccount: string, bankAgency:string): boolean {
   const accountNumber = bankAccount.split("-")[0];
   const verificationDigit = bankAccount.split("-")[1];

   return this.getAccountVerificationDigit(accountNumber,bankAgency) === verificationDigit;
 }

 private getAccountVerificationDigit(accountNumber:string, agencyNumber:string){
  const agencySum = agencyNumber.split("").map(Number).reduce((acc,cur,index)=> acc + this.getLastDigit(cur * this.agencyMultypliers[index]),0);
  const accountSum = accountNumber.split("").map(Number).reduce((acc,cur,index)=> acc + this.getLastDigit(cur * this.accountMultypliers[index]),0);
  return  (10 - this.getLastDigit(agencySum+accountSum)).toString()
}

 private getLastDigit(number:number){
   return parseInt(number.toString().slice(-1))
 }

 private checkAccountType(bankAccount:string): boolean {
   const accountType = bankAccount.slice(0,2);
  return this.accountTypes.includes(accountType);
 }
}
