import isValidCpf from './';

const validsCpfs = [
  '36485544844',
  '64124837801',
  '59572532359',
  '40364478829',
  '37036619686',
  '84841977279',
  '30477546757',
  '14547829780',
  '77062226831',
  '16576636717',
  '96271845860',
  '11257245287',
];

const invalidsCpfs = [
  {},
  [],
  undefined,
  null,
  0,
  false,
  true,
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '2477481',
  'abc123abc12',
  '11257245286',
];

describe('isValidCpf', () => {
  test('should return true if cpf is valid', () => {
    validsCpfs.forEach((cpf) => expect(isValidCpf(cpf)).toBe(true));
  });

  test('should return false if cpf is invalid', () => {
    invalidsCpfs.forEach((cpf) => expect(isValidCpf(cpf)).toBe(false));
  });
});
