export function onlyNumbers(input: string | number): string {
  return String(input).replace(/[^\d]/g, '');
}
