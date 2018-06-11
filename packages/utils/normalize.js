export default function normalize(str) {
  return String(str).replace(/[^\d]/g, '');
}
