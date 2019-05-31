export default function onlyNumbers(str: string | number) {
  return str.toString().replace(/[^\d]/g, '');
}
