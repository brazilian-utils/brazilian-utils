export function randomNumber(length: number) {
  return Math.random()
    .toString()
    .substr(2, length);
}
