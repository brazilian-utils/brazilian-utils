import onlyNumbers from '@brazilian-utils/helper-only-numbers';

import { CEP_LENGTH } from './constants';

const isValidLength = cep => cep.length === CEP_LENGTH;

export default function isValidCep(cep) {
  if (!cep) return false;

  const numericCEP = onlyNumbers(cep);

  return isValidLength(numericCEP);
}
