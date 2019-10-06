import * as API from '.';

describe('Public API', () => {
  const methods = [
    'formatCPF',
    'isLastChar',
    'isValidCPF',
    'formatCNPJ',
    'isValidCNPJ',
    'onlyNumbers',
    'generateCPF',
    'isValidPhone',
    'generateCNPJ',
    'generateChecksum',
    'generateRandomNumber',
  ];

  Object.keys(API).forEach(method => {
    test(`${method} is available in the Public API`, () => {
      expect(methods).toContain(method);
    });
  });
});
