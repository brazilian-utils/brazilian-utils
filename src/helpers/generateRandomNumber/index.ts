export function generateRandomNumber(length: number): string {
  return Math.random()
    .toString()
    .substr(2, length);
}
