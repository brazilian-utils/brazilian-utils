import onlyNumbers from '@brazilian-utils/helper-only-numbers';

export const CNPJ_LENGTH = 14;

export default function formatCnpj(cnpj) {
  if (!cnpj) return '';

  const numericCNPJ = onlyNumbers(cnpj);

  return numericCNPJ
    .split('')
    .map((digit, i) => {
      if (i !== numericCNPJ.length - 1) {
        if (i === 1 || i === 4) return `${digit}.`;
        if (i === 7) return `${digit}/`;
        if (i === 11) return `${digit}-`;
      }
      return i < CNPJ_LENGTH ? digit : '';
    })
    .join('');
}
