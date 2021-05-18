import { BankValidator } from "./bankValidator";

export class BancoDoBrasilValidator extends BankValidator{

  protected isValidFormat(bankAccount: string): boolean {
     return /^\d{1,8}(\-(\d{1}|X))?$/.test(bankAccount);
  }

  protected checkDV(bankAccount: string): boolean {
    const bankAccountSplited = bankAccount.split("-");
    const account = bankAccountSplited[0].length < 8 ? this.formatLeftZeros(8 - bankAccountSplited[0].length, bankAccountSplited[0]) : bankAccountSplited[0];
    const verificationDigit = bankAccountSplited[1] || 'X'
    return this.getAccountVerificationDigit(account) === verificationDigit;
  }

  private formatLeftZeros(count:number, initialValue:string):string{
    if(count) {
      return this.formatLeftZeros(count-1, `0${initialValue}`)
    }
    return initialValue;
  }

  private getAccountVerificationDigit(accountNumber:string){
    const digitSum = accountNumber.split("").map(Number).reduce((acc,cur,index)=> acc + cur * (9-index),0);
    const dv = (11 - digitSum%11);
    if(dv === 10) return "X";
    if(dv === 11) return "0";
    return  dv.toString()
  }

}
