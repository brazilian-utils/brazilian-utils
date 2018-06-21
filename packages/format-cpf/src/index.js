import onlyNumbers from '@brazilian-utils/helper-only-numbers';

export default function formatCpf(cpf) {
  if (!cpf) return '';

  const numericCPF = onlyNumbers(cpf);

  return numericCPF
    .split('')
    .map((digit, i) => {
      if (i !== numericCPF.length - 1) {
        if (i === 2 || i === 5) return `${digit}.`;
        if (i === 8) return `${digit}-`;
      }
      return digit;
    })
    .join('');
}
