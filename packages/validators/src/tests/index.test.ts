import {
  isValidBoleto,
  isValidCep,
  isValidCnpj,
  isValidCpf,
  isValidPhone
} from '../index';

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

describe('isValidCep', () => {
  test('should have been imported correctly', () => {
    expect(isValidCep).not.toBeUndefined();
  });
});

describe('isValidBoleto', () => {
  test('should have been imported correctly', () => {
    expect(isValidBoleto).not.toBeUndefined();
  });
});

describe('isValidPhone', () => {
  test('should have been imported correctly', () => {
    expect(isValidPhone).not.toBeUndefined();
  });
});
