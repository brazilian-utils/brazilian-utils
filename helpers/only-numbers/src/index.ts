export default function onlyNumbers(str: string | number): string {
  return str.toString().replace(/[^\d]/g, '');
}
