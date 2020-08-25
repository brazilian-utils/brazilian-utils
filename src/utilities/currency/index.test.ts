import { format, parse } from '.';

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
    expect(format(0.01, { precistion: 3 })).toBe('0,010');
    expect(format(0.1, { precistion: 3 })).toBe('0,100');
    expect(format(1.1, { precistion: 3 })).toBe('1,100');
    expect(format(1.01, { precistion: 3 })).toBe('1,010');
    expect(format(1.001, { precistion: 3 })).toBe('1,001');
    expect(format(10.001, { precistion: 3 })).toBe('10,001');
    expect(format(100.001, { precistion: 3 })).toBe('100,001');
    expect(format(1000.001, { precistion: 3 })).toBe('1.000,001');
    expect(format(10000.001, { precistion: 3 })).toBe('10.000,001');
    expect(format(100000.001, { precistion: 3 })).toBe('100.000,001');
    expect(format(1000000.001, { precistion: 3 })).toBe('1.000.000,001');
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
