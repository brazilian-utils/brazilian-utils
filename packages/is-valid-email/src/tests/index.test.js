import isValidEmail from '..';

describe('isValidEmail', () => {
  describe('should return false', () => {
    test('when the email whithout at ', () => {
      expect(isValidEmail('john.doe.teste.com.br')).toBe(false);
    });

    test('when the email is invalid because contains accentuation', () => {
      expect(isValidEmail('jóhn.doe@yahoo.com.br')).toBe(false);
    });

    test('when the email is invalid because contains space', () => {
      expect(isValidEmail('john doe@yahoo.com.br')).toBe(false);
    });

    test('when the email is invalid because contains special characters', () => {
      expect(isValidPhone('john&doe@yahoo.com.br')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when email is valid', () => {
      expect(isValidEmail('john.doe@hotmail.com')).toBe(true);
    });

    test('when email is valid with underline', () => {
      expect(isValidEmail('john_doe@myenterprise.com.br')).toBe(true);
    });

    test('when email is valid with domain gmail', () => {
      expect(isValidEmail('john.doe@gmail.com')).toBe(true);
    });
  });
});
