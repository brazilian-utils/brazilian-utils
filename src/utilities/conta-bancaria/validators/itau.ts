import { isEven } from "../../../helpers";
import { BankValidator } from "./bankValidator";

export class ItauValidator extends BankValidator{
  protected isValidFormat(bankAccount: string, agencyNumber:string): boolean {
    return /^\d{5}\-\d{1}$/.test(bankAccount) && /^\d{4}$/.test(agencyNumber);
  }

  protected checkDV(bankAccount: string,  agencyNumber:string): boolean {
    const account = bankAccount.split("-")[0];
    const verificationDigit = bankAccount.split("-")[1];
    return this.getAccountVerificationDigit(account, agencyNumber) === verificationDigit;
  }

  private getAccountVerificationDigit(accountNumber:string, agencyNumber:string){
    const agencySum = agencyNumber.split("").map(Number).reduce((acc,cur, index)=> {
      const digitMultiplication = cur * (isEven(index + 1)? 1 : 2)
      return acc + (digitMultiplication > 9 ? this.sumDigits(digitMultiplication) : digitMultiplication)
    } ,0);
    const accountNumberSum = accountNumber.split("").map(Number).reduce((acc,cur, index)=> {
      const digitMultiplication = cur * (isEven(index + 1)? 1 : 2)
      return acc + (digitMultiplication > 9 ? this.sumDigits(digitMultiplication) : digitMultiplication)
    } ,0);
    const rest = (agencySum+accountNumberSum)%10;
    return  (10 - rest).toString();
  }

  private sumDigits(number:number):number{
    return number
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
  }
}
