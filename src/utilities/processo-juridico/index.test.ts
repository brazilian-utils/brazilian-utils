import { format, isValid, LENGTH } from '.';

describe('format', () => {
  test('should format processo juridico with mask', () => {
    expect(format('')).toBe('');
    expect(format('0')).toBe('0');
    expect(format('00')).toBe('00');
    expect(format('000')).toBe('000');
    expect(format('0002')).toBe('0002');
    expect(format('00020')).toBe('00020');
    expect(format('000208')).toBe('000208');
    expect(format('0002080')).toBe('0002080');
    expect(format('00020802')).toBe('0002080-2');
    expect(format('000208025')).toBe('0002080-25');
    expect(format('0002080252')).toBe('0002080-25.2');
    expect(format('00020802520')).toBe('0002080-25.20');
    expect(format('000208025201')).toBe('0002080-25.201');
    expect(format('0002080252012')).toBe('0002080-25.2012');
    expect(format('00020802520125')).toBe('0002080-25.2012.5');
    expect(format('000208025201251')).toBe('0002080-25.2012.51');
    expect(format('0002080252012515')).toBe('0002080-25.2012.515');
    expect(format('00020802520125150')).toBe('0002080-25.2012.515.0');
    expect(format('000208025201251500')).toBe('0002080-25.2012.515.00');
    expect(format('0002080252012515004')).toBe('0002080-25.2012.515.004');
    expect(format('00020802520125150049')).toBe('0002080-25.2012.515.0049');
  });

  test(`should NOT add digits after the processo juridico length (${LENGTH})`, () => {
    expect(format('00020802520125150049123123')).toBe('0002080-25.2012.515.0049');
  });

  test('should remove all non numeric characters', () => {
    expect(format('0002080@$25201%!@2515.%0049123123')).toBe('0002080-25.2012.515.0049');
  });

  test('should be a valid Processo Juridico', () => {
    expect(isValid('00020802520125150049')).toBe(true);
  });

  test('should be a valid Processo Juridico', () => {
    expect(isValid('00020854720125150049')).toBe(true);
  });

  test('should not be a valid Processo Juridico', () => {
    expect(isValid('00020854220125150049')).toBe(false);
  });

  test('should not be a valid Processo Juridico', () => {
    expect(isValid('00020854220125150049123123')).toBe(false);
  });

  test('should not be a valid Processo Juridico', () => {
    expect(isValid('123123')).toBe(false);
  });

  test('should not be a valid Processo Juridico', () => {
    expect(isValid('abcd123qweasd')).toBe(false);
  });
});
