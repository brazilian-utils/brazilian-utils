export default function onlyNumbers(str: string | number) {
  return String(str).replace(/[^\d]/g, '');
}
