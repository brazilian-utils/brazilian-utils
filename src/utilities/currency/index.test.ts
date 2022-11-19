import { describe as describeNumber, format, parse, pt } from '.';

describe('describe', () => {
  test('should describe irregular numbers', () => {
    expect.assertions(pt.irregular.length * 3);
    for (let i = 0; i < 20; i++) {
      const irregular = pt.irregular[i];
      expect(describeNumber(i, false)).toBe(irregular);
      expect(describeNumber(i)).toBe(`${irregular} reais e zero centavos`);
      expect(describeNumber(i + 0.05)).toBe(`${irregular} reais e cinco centavos`);
    }
  });

  test('should describe rounded ten numbers', () => {
    expect.assertions(pt.ten.length * 2);
    for (let i = 0; i < 10; i++) {
      const n = i * 10;
      const ten = pt.irregular[n] ?? pt.ten[i];
      expect(describeNumber(n, false)).toBe(ten);
      expect(describeNumber(n)).toBe(`${ten} reais e zero centavos`);
    }
  });

  test('should describe composed ten numbers', () => {
    expect.assertions((pt.ten.length - 2) * 3);
    for (let i = 2; i < 10; i++) {
      const n = i * 10;
      const singular = pt.irregular[i];
      const ten = pt.irregular[n] ?? pt.ten[i];
      const composed = ten === singular ? ten : `${ten} e ${singular}`;
      expect(describeNumber(n + 0.55)).toBe(`${ten} reais e cinquenta e cinco centavos`);
      expect(describeNumber(n + i)).toBe(`${composed} reais e zero centavos`);
      expect(describeNumber(n + i + 0.55)).toBe(`${composed} reais e cinquenta e cinco centavos`);
    }
  });

  test('should describe hundred numbers', () => {
    expect.assertions((pt.hundred.length - 1) * 7);
    for (let i = 1; i < 10; i++) {
      const n = i * 100;
      const singular = pt.irregular[i];
      const hundred = pt.hundred[i];
      const singularHundred = pt.hundred[i].replace(/nto$/i, 'm');
      expect(describeNumber(n, false)).toBe(singularHundred);
      expect(describeNumber(n)).toBe(`${singularHundred} reais e zero centavos`);
      expect(describeNumber(n + 0.66)).toBe(`${singularHundred} reais e sessenta e seis centavos`);
      expect(describeNumber(n + i)).toBe(`${hundred} e ${singular} reais e zero centavos`);
      expect(describeNumber(n + 20)).toBe(`${hundred} e vinte reais e zero centavos`);
      expect(describeNumber(n + i + 20)).toBe(`${hundred} e vinte e ${singular} reais e zero centavos`);
      expect(describeNumber(n + i + 40 + 0.67)).toBe(
        `${hundred} e quarenta e ${singular} reais e sessenta e sete centavos`
      );
    }
  });

  test('should describe rounded thousand numbers', () => {
    expect.assertions(100 * 3);
    for (let i = 1; i <= 100; i++) {
      const n = i * 1000;
      const thousand = describeNumber(i, false);
      expect(describeNumber(n, false)).toBe(`${thousand} mil`);
      expect(describeNumber(n)).toBe(`${thousand} mil reais e zero centavos`);
      expect(describeNumber(n + 0.5)).toBe(`${thousand} mil reais e cinquenta centavos`);
    }
  });

  test('should describe composed thousand numbers', () => {
    expect.assertions((pt.hundred.length - 1) * 6);
    for (let i = 1; i < 10; i++) {
      const n = i * 1000;
      const singular = pt.irregular[i];
      const thousand = describeNumber(n, false);
      expect(describeNumber(n + 0.66)).toBe(`${thousand} reais e sessenta e seis centavos`);
      expect(describeNumber(n + i)).toBe(`${thousand} e ${singular} reais e zero centavos`);
      expect(describeNumber(n + 20)).toBe(`${thousand} e vinte reais e zero centavos`);
      expect(describeNumber(n + 20 + i)).toBe(`${thousand} e vinte e ${singular} reais e zero centavos`);
      expect(describeNumber(n + 120 + i)).toBe(`${thousand} cento e vinte e ${singular} reais e zero centavos`);
      expect(describeNumber(n + i + 20 + 0.67)).toBe(
        `${thousand} e vinte e ${singular} reais e sessenta e sete centavos`
      );
    }
  });

  test('should describe rounded million numbers', () => {
    expect.assertions(100 * 3);
    for (let i = 1; i <= 100; i++) {
      const n = i * 1000000;
      const million = describeNumber(i, false);
      const assignment = i === 1 ? 'milhão' : 'milhões';
      expect(describeNumber(n, false)).toBe(`${million} ${assignment}`);
      expect(describeNumber(n)).toBe(`${million} ${assignment} de reais e zero centavos`);
      expect(describeNumber(n + 0.5)).toBe(`${million} ${assignment} de reais e cinquenta centavos`);
    }
  });

  test('should describe composed million numbers', () => {
    expect.assertions(9 * 6);
    for (let i = 1; i < 10; i++) {
      const n = i * 1000000;
      const singular = pt.irregular[i];
      const million = describeNumber(i, false);
      const assignment = i === 1 ? 'milhão' : 'milhões';
      expect(describeNumber(n + 0.66)).toBe(`${million} ${assignment} de reais e sessenta e seis centavos`);
      expect(describeNumber(n + i)).toBe(`${million} ${assignment} e ${singular} reais e zero centavos`);
      expect(describeNumber(n + 20)).toBe(`${million} ${assignment} e vinte reais e zero centavos`);
      expect(describeNumber(n + 20 + i)).toBe(
        `${million} ${assignment} e vinte e ${singular} reais e zero centavos`
      );
      expect(describeNumber(n + 120 + i)).toBe(
        `${million} ${assignment} cento e vinte e ${singular} reais e zero centavos`
      );
      expect(describeNumber(n + i + 20 + 0.67)).toBe(
        `${million} ${assignment} e vinte e ${singular} reais e sessenta e sete centavos`
      );
    }
  });

  test('should describe formatted numbers', () => {
    expect(describeNumber('R$ 1', false)).toBe('um');
    expect(describeNumber('R$ 2,00', false)).toBe('dois');
    expect(describeNumber('R$ 10.00')).toBe('dez reais e zero centavos');
    expect(describeNumber('R$ 105,01')).toBe('cento e cinco reais e um centavos');
    expect(describeNumber('R$ 105,1')).toBe('cento e cinco reais e dez centavos');
    expect(describeNumber('R$ 105,10')).toBe('cento e cinco reais e dez centavos');
    expect(describeNumber('R$ 1050,25')).toBe('um mil e cinquenta reais e vinte e cinco centavos');
    expect(describeNumber('R$ 105000,99')).toBe('cento e cinco mil reais e noventa e nove centavos');
    expect(describeNumber('R$ 105000000,00')).toBe('cento e cinco milhões de reais e zero centavos');
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
