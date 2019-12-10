// Tests created using the following links as reference:
// https://help.returnpath.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-
// https://stackoverflow.com/questions/2049502/what-characters-are-allowed-in-an-email-address

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

    describe('when email', () => {
      test('without at symbol', () => {
        expect(isValid('john.doe.teste.com.br')).toBe(false);
      });

      test('is too long', () => {
        const tooLongEmail = 'a'.repeat(64) + '@' + 'test.co.uk'.repeat(28);

        expect(isValid(tooLongEmail)).toBe(false);
      });
    });

    describe('when recipient name', () => {
      test('has length equal to 0', () => {
        expect(isValid('@teste.com.br')).toBe(false);
      });

      test('has more then 64 characters length', () => {
        const emailWith65CharRecipient = `${'a'.repeat(65)}@teste.com.br`;

        expect(isValid(emailWith65CharRecipient)).toBe(false);
      });

      test('has invalid character', () => {
        expect(isValid(`(johndoe)@test.com.br`)).toBe(false);
      });

      test('has 2 special characters consecutively', () => {
        expect(isValid('john..doe@teste.com.br')).toBe(false);
      });

      test('start with unallowed special characters consecutively', () => {
        expect(isValid('.john.doe@teste.com.br')).toBe(false);
      });

      test('when contains accentuation', () => {
        expect(isValid('jóhn.doe@teste.com.br')).toBe(false);
      });
    });

    describe('when domain name', () => {
      test('has length equal to 0', () => {
        expect(isValid('johndoe@')).toBe(false);
      });

      test('has more then 253 characters length', () => {
        const domainWith254Length = 'ab' + 'teste.com.br'.repeat(21);

        expect(isValid(`johndoe@${domainWith254Length}`)).toBe(false);
      });

      test('when contains accentuation', () => {
        expect(isValid('johndoe@téste.com.br')).toBe(false);
      });

      test('hasnt top level domain', () => {
        expect(isValid('johndoe@test.com.')).toBe(false);
      });
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
