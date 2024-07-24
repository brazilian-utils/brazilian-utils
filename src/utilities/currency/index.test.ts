import { describe as describeCurrency, format, parse, STRINGS } from '.';

describe('describe', () => {
  test('should describe irregular numbers', () => {
    expect.assertions(STRINGS.irregular.length * 3);
    for (let i = 0; i < 20; i++) {
      const irregular = STRINGS.irregular[i];
      expect(describeCurrency(i, false)).toBe(irregular);
      expect(describeCurrency(i)).toBe(`${irregular} reais e zero centavos`);
      expect(describeCurrency(i + 0.05)).toBe(`${irregular} reais e cinco centavos`);
    }
  });

  test('should describe rounded ten numbers', () => {
    expect.assertions(STRINGS.ten.length * 2);
    for (let i = 0; i < 10; i++) {
      const n = i * 10;
      const ten = STRINGS.irregular[n] ?? STRINGS.ten[i];
      expect(describeCurrency(n, false)).toBe(ten);
      expect(describeCurrency(n)).toBe(`${ten} reais e zero centavos`);
    }
  });

  test('should describe composed ten numbers', () => {
    expect.assertions((STRINGS.ten.length - 2) * 3);
    for (let i = 2; i < 10; i++) {
      const n = i * 10;
      const singular = STRINGS.irregular[i];
      const ten = STRINGS.irregular[n] ?? STRINGS.ten[i];
      const composed = ten === singular ? ten : `${ten} e ${singular}`;
      expect(describeCurrency(n + 0.55)).toBe(`${ten} reais e cinquenta e cinco centavos`);
      expect(describeCurrency(n + i)).toBe(`${composed} reais e zero centavos`);
      expect(describeCurrency(n + i + 0.55)).toBe(`${composed} reais e cinquenta e cinco centavos`);
    }
  });

  test('should describe hundred numbers', () => {
    expect.assertions((STRINGS.hundred.length - 1) * 7);
    for (let i = 1; i < 10; i++) {
      const n = i * 100;
      const singular = STRINGS.irregular[i];
      const hundred = STRINGS.hundred[i];
      const singularHundred = STRINGS.hundred[i].replace(/nto$/i, 'm');
      expect(describeCurrency(n, false)).toBe(singularHundred);
      expect(describeCurrency(n)).toBe(`${singularHundred} reais e zero centavos`);
      expect(describeCurrency(n + 0.66)).toBe(`${singularHundred} reais e sessenta e seis centavos`);
      expect(describeCurrency(n + i)).toBe(`${hundred} e ${singular} reais e zero centavos`);
      expect(describeCurrency(n + 20)).toBe(`${hundred} e vinte reais e zero centavos`);
      expect(describeCurrency(n + i + 20)).toBe(`${hundred} e vinte e ${singular} reais e zero centavos`);
      expect(describeCurrency(n + i + 40 + 0.67)).toBe(
        `${hundred} e quarenta e ${singular} reais e sessenta e sete centavos`
      );
    }
  });

  test('should describe rounded thousand numbers', () => {
    expect.assertions(100 * 3);
    for (let i = 1; i <= 100; i++) {
      const n = i * 1000;
      const thousand = describeCurrency(i, false);
      expect(describeCurrency(n, false)).toBe(`${thousand} mil`);
      expect(describeCurrency(n)).toBe(`${thousand} mil reais e zero centavos`);
      expect(describeCurrency(n + 0.5)).toBe(`${thousand} mil reais e cinquenta centavos`);
    }
  });

  test('should describe composed thousand numbers', () => {
    expect.assertions((STRINGS.hundred.length - 1) * 6);
    for (let i = 1; i < 10; i++) {
      const n = i * 1000;
      const singular = STRINGS.irregular[i];
      const thousand = describeCurrency(n, false);
      expect(describeCurrency(n + 0.66)).toBe(`${thousand} reais e sessenta e seis centavos`);
      expect(describeCurrency(n + i)).toBe(`${thousand} e ${singular} reais e zero centavos`);
      expect(describeCurrency(n + 20)).toBe(`${thousand} e vinte reais e zero centavos`);
      expect(describeCurrency(n + 20 + i)).toBe(`${thousand} e vinte e ${singular} reais e zero centavos`);
      expect(describeCurrency(n + 120 + i)).toBe(`${thousand} cento e vinte e ${singular} reais e zero centavos`);
      expect(describeCurrency(n + i + 20 + 0.67)).toBe(
        `${thousand} e vinte e ${singular} reais e sessenta e sete centavos`
      );
    }
  });

  test('should describe rounded million numbers', () => {
    expect.assertions(100 * 3);
    for (let i = 1; i <= 100; i++) {
      const n = i * 1000000;
      const million = describeCurrency(i, false);
      const assignment = i === 1 ? 'milhão' : 'milhões';
      expect(describeCurrency(n, false)).toBe(`${million} ${assignment}`);
      expect(describeCurrency(n)).toBe(`${million} ${assignment} de reais e zero centavos`);
      expect(describeCurrency(n + 0.5)).toBe(`${million} ${assignment} de reais e cinquenta centavos`);
    }
  });

  test('should describe composed million numbers', () => {
    expect.assertions(9 * 6);
    for (let i = 1; i < 10; i++) {
      const n = i * 1000000;
      const singular = STRINGS.irregular[i];
      const million = describeCurrency(i, false);
      const assignment = i === 1 ? 'milhão' : 'milhões';
      expect(describeCurrency(n + 0.66)).toBe(`${million} ${assignment} de reais e sessenta e seis centavos`);
      expect(describeCurrency(n + i)).toBe(`${million} ${assignment} e ${singular} reais e zero centavos`);
      expect(describeCurrency(n + 20)).toBe(`${million} ${assignment} e vinte reais e zero centavos`);
      expect(describeCurrency(n + 20 + i)).toBe(`${million} ${assignment} e vinte e ${singular} reais e zero centavos`);
      expect(describeCurrency(n + 120 + i)).toBe(
        `${million} ${assignment} cento e vinte e ${singular} reais e zero centavos`
      );
      expect(describeCurrency(n + i + 20 + 0.67)).toBe(
        `${million} ${assignment} e vinte e ${singular} reais e sessenta e sete centavos`
      );
    }
  });

  test('should describe formatted numbers', () => {
    expect(describeCurrency('R$ 1', false)).toBe('um');
    expect(describeCurrency('R$ 2,00', false)).toBe('dois');
    expect(describeCurrency('R$ 10.00')).toBe('dez reais e zero centavos');
    expect(describeCurrency('R$ 105,01')).toBe('cento e cinco reais e um centavos');
    expect(describeCurrency('R$ 105,1')).toBe('cento e cinco reais e dez centavos');
    expect(describeCurrency('R$ 105,10')).toBe('cento e cinco reais e dez centavos');
    expect(describeCurrency('R$ 1050,25')).toBe('um mil e cinquenta reais e vinte e cinco centavos');
    expect(describeCurrency('R$ 105000,99')).toBe('cento e cinco mil reais e noventa e nove centavos');
    expect(describeCurrency('R$ 105000000,00')).toBe('cento e cinco milhões de reais e zero centavos');
  });
});

describe('format', () => {
  test('should format Currency into BRL', () => {
    expect(format(0.01)).toBe('0,01');
    expect(format(0.1)).toBe('0,10');
    expect(format(1)).toBe('1,00');
    expect(format(10)).toBe('10,00');
    expect(format(10.1)).toBe('10,10');
    expect(format(10.01)).toBe('10,01');
    expect(format(100.01)).toBe('100,01');
    expect(format(1000.01)).toBe('1.000,01');
    expect(format(10000.01)).toBe('10.000,01');
    expect(format(100000.01)).toBe('100.000,01');
    expect(format(1000000.01)).toBe('1.000.000,01');
  });

  test('should format with different precision', () => {
    expect(format(0.01, { precision: 3 })).toBe('0,010');
    expect(format(0.1, { precision: 3 })).toBe('0,100');
    expect(format(1.1, { precision: 3 })).toBe('1,100');
    expect(format(1.01, { precision: 3 })).toBe('1,010');
    expect(format(1.001, { precision: 3 })).toBe('1,001');
    expect(format(10.001, { precision: 3 })).toBe('10,001');
    expect(format(100.001, { precision: 3 })).toBe('100,001');
    expect(format(1000.001, { precision: 3 })).toBe('1.000,001');
    expect(format(10000.001, { precision: 3 })).toBe('10.000,001');
    expect(format(100000.001, { precision: 3 })).toBe('100.000,001');
    expect(format(1000000.001, { precision: 3 })).toBe('1.000.000,001');
  });
});

describe('parse', () => {
  test('should transform a formatted value into a float', () => {
    expect(parse('')).toBe(0);
    expect(parse('R$ 1,00')).toBe(1);
    expect(parse('R$ 1,10')).toBe(1.1);
    expect(parse('R$ 1,01')).toBe(1.01);
    expect(parse('R$ 10,01')).toBe(10.01);
    expect(parse('R$ 100,01')).toBe(100.01);
    expect(parse('R$ 1.000,01')).toBe(1000.01);
    expect(parse('R$ 10.000,01')).toBe(10000.01);
    expect(parse('R$ 100.000,01')).toBe(100000.01);
    expect(parse('R$ 1.000.000,01')).toBe(1000000.01);
  });
});
