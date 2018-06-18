export default function onlyNumbers(str) {
  return String(str).replace(/[^\d]/g, '');
}
