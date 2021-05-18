import { BankValidator } from "./bankValidator";

export class BradescoValidator extends BankValidator{
  protected isValidFormat(bankAccount: string): boolean {
    return /^\d{7}\-(\d{1}|P)?$/.test(bankAccount);
 }

 protected checkDV(bankAccount: string): boolean {
   const bankAccountSplited = bankAccount.split("-");
   const account = bankAccountSplited[0];
   const verificationDigit = bankAccountSplited[1];
   return this.getAccountVerificationDigit(account) === verificationDigit;
 }

 private getAccountVerificationDigit(accountNumber:string){
   const digitSum = accountNumber.split("").reverse().map(Number).reduce((acc,cur,index)=> acc + cur * ((index%7+2)),0);
   const rest = digitSum%11;
   if(rest === 1) return "P";
   if(rest === 0) return "0";
   return  (11 - rest).toString()
 }
}
