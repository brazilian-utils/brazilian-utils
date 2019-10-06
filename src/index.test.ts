import * as API from '.';

describe('Public API', () => {
  const methods = [
    'formatCPF',
    'isLastChar',
    'isValidCPF',
    'formatCNPJ',
    'onlyNumbers',
    'generateCPF',
    'generateRandomNumber',
  ];

  methods.forEach(method => {
    test(`${method} is available in the Public API`, () => {
      expect(API).toHaveProperty(method);
    });
  });
});
