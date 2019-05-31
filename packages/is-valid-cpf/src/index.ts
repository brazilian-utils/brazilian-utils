import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import generateChecksum from '@brazilian-utils/helper-generate-checksum';

import { RESERVED_ENTRIES, VERIFICATION_INDEXES } from './constants';

function isFormatValid(taxId: string): boolean {
  return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(taxId);
}

function isReserved(taxId: string): boolean {
  return RESERVED_ENTRIES.indexOf(taxId) >= 0;
}

function isChecksumValid(taxId: string): boolean {
  return VERIFICATION_INDEXES.every(index => {
    const mod =
      generateChecksum(
        taxId
          .slice(0, index)
          .split('')
          .reduce((a, b) => a + b, ''),
        index + 1
      ) % 11;
    return taxId[index] === String(mod < 2 ? 0 : 11 - mod);
  });
}

export default function isValidCpf(cpf: string) {
  if (!cpf) return false;

  const numericCPF = onlyNumbers(cpf);

  return (
    isFormatValid(cpf) && !isReserved(numericCPF) && isChecksumValid(numericCPF)
  );
}
