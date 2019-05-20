import { formatProcessoJuridico } from '..';
import { PROCESSO_LENGTH } from '.';

describe('formatProcessoJuridico', () => {
  test('should format processo with mask', () => {
    expect(formatProcessoJuridico('')).toBe('');
    expect(formatProcessoJuridico('0')).toBe('0');
    expect(formatProcessoJuridico('00')).toBe('00');
    expect(formatProcessoJuridico('000')).toBe('000');
    expect(formatProcessoJuridico('0002')).toBe('0002');
    expect(formatProcessoJuridico('00020')).toBe('00020');
    expect(formatProcessoJuridico('000208')).toBe('000208');
    expect(formatProcessoJuridico('0002080')).toBe('0002080');
    expect(formatProcessoJuridico('00020802')).toBe('0002080-2');
    expect(formatProcessoJuridico('000208025')).toBe('0002080-25');
    expect(formatProcessoJuridico('0002080252')).toBe('0002080-25.2');
    expect(formatProcessoJuridico('00020802520')).toBe('0002080-25.20');
    expect(formatProcessoJuridico('000208025201')).toBe('0002080-25.201');
    expect(formatProcessoJuridico('0002080252012')).toBe('0002080-25.2012');
    expect(formatProcessoJuridico('00020802520125')).toBe('0002080-25.2012.5');
    expect(formatProcessoJuridico('000208025201251')).toBe(
      '0002080-25.2012.51'
    );
    expect(formatProcessoJuridico('0002080252012515')).toBe(
      '0002080-25.2012.515'
    );
    expect(formatProcessoJuridico('00020802520125150')).toBe(
      '0002080-25.2012.515.0'
    );
    expect(formatProcessoJuridico('000208025201251500')).toBe(
      '0002080-25.2012.515.00'
    );
    expect(formatProcessoJuridico('0002080252012515004')).toBe(
      '0002080-25.2012.515.004'
    );
    expect(formatProcessoJuridico('00020802520125150049')).toBe(
      '0002080-25.2012.515.0049'
    );
  });

  test(`should NOT add digits after the Processo length (${PROCESSO_LENGTH})`, () => {
    expect(formatProcessoJuridico('00020802520125150049123123')).toBe(
      '0002080-25.2012.515.0049'
    );
  });

  test('should remove all non numeric characters', () => {
    expect(formatProcessoJuridico('0002080@$25201%!@2515.%0049123123')).toBe(
      '0002080-25.2012.515.0049'
    );
  });
});
