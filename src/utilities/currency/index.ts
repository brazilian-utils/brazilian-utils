type FormatOptions = {
  precision?: number;
};

export function format(value: number, options: FormatOptions = { precision: 2 }): string {
  return value
    .toFixed(options.precision)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function parse(value: string): number {
  return parseInt(value.replace(/\D/g, '') || '0', 10) / 100;
}
