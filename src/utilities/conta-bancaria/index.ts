import { CitibankValidator } from './validators/citibank';
import { HSBCValidator } from './validators/hsbc';
import { RealValidator } from './validators/real';
import { ItauValidator } from './validators/itau';
import { BradescoValidator } from './validators/bradesco';
import { CaixaEconomicaFederalValidator } from './validators/caixaEconomicaFederal';
import { SantanderValidator } from './validators/santander';
import { BancoDoBrasilValidator } from './validators/bancoDoBrasil';

type BankCode = "001" | "033" | "104" | "237" | "341" | "356" | "399" | "745";

const BANKS = {
  "001": BancoDoBrasilValidator,
  "033": SantanderValidator,
  "104": CaixaEconomicaFederalValidator,
  "237": BradescoValidator,
  "341": ItauValidator,
  "356": RealValidator,
  "399": HSBCValidator,
  "745": CitibankValidator
}

/**
 *
 * @param bankCode 001: Banco do Brasil, 033: Santander, 104: CEF, 237: Bradesco, 341: Itau, 356: Real, 399: HSBC, 745: Citibank
 * @param accountNumber
 * @param agencyNumber Banks 003, 104, 237, 341, 356, 399 and 745 requires agencyNumber
 * @returns
 */
export function isValidAccount(bankCode:BankCode, accountNumber: string, agencyNumber?: string) {
  const bank = new BANKS[bankCode]();
  return bank.isValid(accountNumber, agencyNumber);
}
