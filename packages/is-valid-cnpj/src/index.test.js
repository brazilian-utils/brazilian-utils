import isValidCnpj from './';

const validsCnpjs = [
  '03570815000102',
  '84662015000105',
  '72347925000114',
  '65095857000188',
  '04660753000184',
  '49502235000170',
  '33796589000135',
  '70592206000133',
  '48581232000107',
  '13723705000189',
  '39380574000178',
  '25670061000197',
];

const invalidsCnpjs = [
  {},
  [],
  undefined,
  null,
  0,
  false,
  true,
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
  '2477481',
  'abc123abc12123',
  '11257245286531',
];

describe('isValidCnpj', () => {
  test('should return true if cnpj is valid', () => {
    validsCnpjs.forEach((cnpj) => expect(isValidCnpj(cnpj)).toBe(true));
  });

  test('should return false if cnpj is invalid', () => {
    invalidsCnpjs.forEach((cnpj) => expect(isValidCnpj(cnpj)).toBe(false));
  });
});
