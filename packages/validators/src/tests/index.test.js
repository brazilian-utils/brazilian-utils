import { isValidCpf, isValidCnpj } from '../index';

describe('isValidCpf', () => {
  test('should have been imported correctly', () => {
    expect(isValidCpf).not.toBeUndefined();
  });
});

describe('isValidCnpj', () => {
  test('should have been imported correctly', () => {
    expect(isValidCnpj).not.toBeUndefined();
  });
});
