import onlyNumbers from '../../helpers/onlyNumbers';

export const CEP_LENGTH = 8;

const isValidLength = (cep: string) => cep.length === CEP_LENGTH;

export default function isValidCep(cep: string) {
  if (!cep) {
    return false;
  }

  const numericCEP = onlyNumbers(cep);

  return isValidLength(numericCEP);
}
