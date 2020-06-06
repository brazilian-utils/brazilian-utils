import {
  LENGTH,
  isValidNf,
  isCnpjValid,
  getUF,
  getYearMonth,
  getCNPJ,
  getModel,
  getSeries,
  getNumber,
  getCodeOfSystem,
  getDv,
} from '.';

describe('is OK', () => {
  test('when extract UF', () => {
    expect(getUF('51080701212344000127550010000000981364112281')).toBe('51');
  });
  test('when extract YEAR and MONTH', () => {
    expect(getYearMonth('51080701212344000127550010000000981364112281')).toBe('0807');
  });
  test('when extract ', () => {
    expect(getCNPJ('51080701212344000127550010000000981364112281')).toBe('01212344000127');
  });
  test('when extract ', () => {
    expect(getModel('51080701212344000127550010000000981364112281')).toBe('55');
  });
  test('when extract ', () => {
    expect(getSeries('51080701212344000127550010000000981364112281')).toBe('001');
  });
  test('when extract ', () => {
    expect(getNumber('51080701212344000127550010000000981364112281')).toBe('000000098');
  });
  test('when extract ', () => {
    expect(getCodeOfSystem('51080701212344000127550010000000981364112281')).toBe('136411228');
  });
  test('when extract ', () => {
    expect(getDv('51080701212344000127550010000000981364112281')).toBe('1');
  });
});

describe('isValid', () => {
  describe('should return false', () => {
    test(`when dont match with CHAVE ACESSO length (${LENGTH})`, () => {
      expect(isValidNf('123456')).toBe(false);
    });

    test('when is a empty string', () => {
      expect(isValidNf('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidNf(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidNf(undefined as any)).toBe(false);
    });

    test('when is CNPJ invalid', () => {
      expect(isCnpjValid('51080701514444000127550010000000981364112281')).toBe(false);
    });
  });

  describe('should return true', () => {
    test(`when is CNPJ valid`, () => {
      expect(isCnpjValid('51080701212344000127550010000000981364112281')).toBe(true);
    });
  });
});
