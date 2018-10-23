import isValidCnpj from '@brazilian-utils/is-valid-cnpj';
import generateCnpj from '../index';

describe('cnpjGenerator', () => {
  test('It can generate a valid CNPJ', () => {
    expect(isValidCnpj(generateCnpj())).toBe(true);
  });
});
