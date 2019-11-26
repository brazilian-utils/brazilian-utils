import { isValid } from '.';

describe('isValid', () => {
  describe('should return false', () => {
    test('when is a empty string', () => {
      expect(isValid('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValid(null as any)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValid(undefined as any)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValid(true as any)).toBe(false);
      expect(isValid(false as any)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValid({} as any)).toBe(false);
    });

    test('when is a array', () => {
      expect(isValid([] as any)).toBe(false);
    });

    test('when the email whithout at ', () => {
      expect(isValid('john.doe.teste.com.br')).toBe(false);
    });

    test('when the email is invalid because contains accentuation', () => {
      expect(isValid('jóhn.doe@yahoo.com.br')).toBe(false);
    });

    test('when the email is invalid because contains space', () => {
      expect(isValid('john doe@yahoo.com.br')).toBe(false);
    });

    test('when the email is invalid because contains special characters', () => {
      expect(isValid('john&doe@yahoo.com.br')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when email is valid', () => {
      expect(isValid('john.doe@hotmail.com')).toBe(true);
    });

    test('when email is valid with underline', () => {
      expect(isValid('john_doe@myenterprise.com.br')).toBe(true);
    });

    test('when email is valid with domain gmail', () => {
      expect(isValid('john.doe@gmail.com')).toBe(true);
    });
  });
});
