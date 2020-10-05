const validMercosulLicensePlateRegex = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
const validBrazilianLicensePlateRegex = /^[a-zA-Z]{3}-?[0-9]{4}$/;

export function isValid(licensePlate: string): boolean {
  if (!licensePlate || typeof licensePlate !== 'string') return false;

  const matchedLicensePlate =
    validMercosulLicensePlateRegex.exec(licensePlate) || validBrazilianLicensePlateRegex.exec(licensePlate);
  if (!matchedLicensePlate) return false;

  return true;
}
