import { onlyNumbers } from '../../helpers';

export const STRINGS = {
  irregular: [
    'zero',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
    'onze',
    'doze',
    'treze',
    'catorze',
    'quinze',
    'dezesseis',
    'dezessete',
    'dezoito',
    'dezenove',
  ],
  ten: ['zero', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
  hundred: [
    'zero',
    'cento',
    'duzentos',
    'trezentos',
    'quatrocentos',
    'quinhentos',
    'seiscentos',
    'setecentos',
    'oitocentos',
    'novecentos',
  ],
};

function conditionalValue<TResult>(isTruthy: unknown, result: TResult): TResult | undefined {
  return isTruthy ? result : undefined;
}

function describeIrregular(digits: string): string {
  const index = Number(digits);
  return STRINGS.irregular[index];
}

function describeTen(digits: string): string {
  const isIrregular = Number(digits) < 20;
  if (isIrregular) return describeIrregular(digits);

  const isRounded = /^\d0$/i.test(digits);
  const [tenValue, unitValue] = digits.split('');
  const ten = STRINGS.ten[Number(tenValue)];
  if (isRounded) return ten;

  const unit = describeIrregular(unitValue);
  return `${ten} e ${unit}`;
}

function describeHundred(digits: string): string {
  const isRounded = /^\d00$/i.test(digits);
  const hundredValue = digits.slice(0, 1);
  const hundred = STRINGS.hundred[Number(hundredValue)];
  if (isRounded) return hundred.replace(/nto$/i, 'm');

  const tenValue = digits.slice(1);
  const ten = describeTen(tenValue);
  return `${hundred} e ${ten}`;
}

function describeThousand(digits: string): string {
  const isRounded = /^\d{1,3}000$/i.test(digits);
  const thousandValue = digits.replace(/\d{3}$/i, '');
  const thousand = switchNumber(thousandValue);
  if (isRounded) return `${thousand} mil`;

  const hundredValue = digits.replace(/.+(\d{3})$/i, '$1');
  const hundred = switchNumber(Number(hundredValue));
  const goesHundred = Number(hundredValue) > 0;
  const goesAnd = goesHundred && Number(hundredValue) <= 100;
  return [thousand, ' mil', conditionalValue(goesAnd, ' e'), conditionalValue(goesHundred, ` ${hundred}`)].join('');
}

function describeMillion(digits: string): string {
  const isRounded = /^\d{1,3}000000$/i.test(digits);
  const millionValue = digits.replace(/\d{6}$/i, '');
  const assignment = Number(millionValue) === 1 ? 'milhão' : 'milhões';
  const million = switchNumber(millionValue);
  if (isRounded) return `${million} ${assignment}`;

  const thousandValue = digits.replace(/.+(\d{6})$/i, '$1');
  const thousand = switchNumber(Number(thousandValue));
  const goesThousand = Number(thousandValue) > 0;
  const goesAnd = goesThousand && Number(thousandValue) <= 100;
  return [
    million,
    ` ${assignment}`,
    conditionalValue(goesAnd, ' e'),
    conditionalValue(goesThousand, ` ${thousand}`),
  ].join('');
}

function switchNumber(value: string | number): string {
  const digits = onlyNumbers(value);

  const isMillion = /^\d{7,9}$/i.test(digits);
  if (isMillion) return describeMillion(digits);

  const isThousand = /^\d{4,6}$/i.test(digits);
  if (isThousand) return describeThousand(digits);

  const isHundred = /^\d{3}$/i.test(digits);
  if (isHundred) return describeHundred(digits);

  const isTen = /^\d{2}$/i.test(digits);
  if (isTen) return describeTen(digits);

  return describeIrregular(digits);
}

export function describe(value: string | number, isCash: boolean = true): string {
  if (typeof value === 'number') value = String(value);

  let centavos = '';
  const centavosExpression = /[,.]\d{1,2}$/i;
  const hasCentavos = centavosExpression.test(value);
  if (isCash) {
    if (hasCentavos) {
      const centavosValue = value.replace(/.+[,.](\d{1,2})$/i, '$1').padEnd(2, '0');
      centavos = `${switchNumber(centavosValue)} centavos`;
    } else {
      centavos = 'zero centavos';
    }
  }

  const reaisValue = value.replace(centavosExpression, '');
  const reaisString = switchNumber(reaisValue);
  const goesOf = /milh.{2,3}$/i.test(reaisString);
  const reais = [reaisString, conditionalValue(goesOf && isCash, ' de'), conditionalValue(isCash, ' reais')].join('');

  return [reais, conditionalValue(centavos, ` e ${centavos}`)].join('');
}

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
