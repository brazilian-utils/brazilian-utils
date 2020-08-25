export function format(value: number, precision: number = 2): string {
  return value
    .toFixed(precision)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function parse(value: string = ''): number {
  return parseInt(value.replace(/\D/g, '') || '0', 10) / 100;
}
