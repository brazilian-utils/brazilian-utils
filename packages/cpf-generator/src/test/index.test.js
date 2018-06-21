import cpfGenerator from '../';
import { CPF_LENGTH, STATES_CODE } from '../constants';
import isValidCpf from '../../../is-valid-cpf/src';

describe('cpfGenerator', () => {
  describe('should have the right length', () => {
    test(`without mask (${CPF_LENGTH})`, () => {
      expect(cpfGenerator().length).toBe(CPF_LENGTH);
    });
  });

  test('should return valid CPF', () => {
    expect(isValidCpf(cpfGenerator())).toBe(true);
  });

  describe('should return a valid CPF for each bazilian state', () => {
    describe('with Initials', () => {
      test('RS', () => {
        expect(cpfGenerator({ state: 'RS' }).substr(8, 1) === STATES_CODE.RS).toBe(true);
      });

      test('DF', () => {
        expect(cpfGenerator({ state: 'DF' }).substr(8, 1) === STATES_CODE.DF).toBe(true);
      });

      test('GO', () => {
        expect(cpfGenerator({ state: 'GO' }).substr(8, 1) === STATES_CODE.GO).toBe(true);
      });

      test('MT', () => {
        expect(cpfGenerator({ state: 'MT' }).substr(8, 1) === STATES_CODE.MT).toBe(true);
      });

      test('MS', () => {
        expect(cpfGenerator({ state: 'MS' }).substr(8, 1) === STATES_CODE.MS).toBe(true);
      });

      test('TO', () => {
        expect(cpfGenerator({ state: 'TO' }).substr(8, 1) === STATES_CODE.TO).toBe(true);
      });

      test('AM', () => {
        expect(cpfGenerator({ state: 'AM' }).substr(8, 1) === STATES_CODE.AM).toBe(true);
      });

      test('PA', () => {
        expect(cpfGenerator({ state: 'PA' }).substr(8, 1) === STATES_CODE.PA).toBe(true);
      });

      test('RR', () => {
        expect(cpfGenerator({ state: 'RR' }).substr(8, 1) === STATES_CODE.RR).toBe(true);
      });

      test('AP', () => {
        expect(cpfGenerator({ state: 'AP' }).substr(8, 1) === STATES_CODE.AP).toBe(true);
      });

      test('AC', () => {
        expect(cpfGenerator({ state: 'AC' }).substr(8, 1) === STATES_CODE.AC).toBe(true);
      });

      test('RO', () => {
        expect(cpfGenerator({ state: 'RO' }).substr(8, 1) === STATES_CODE.RO).toBe(true);
      });

      test('CE', () => {
        expect(cpfGenerator({ state: 'CE' }).substr(8, 1) === STATES_CODE.CE).toBe(true);
      });

      test('MA', () => {
        expect(cpfGenerator({ state: 'MA' }).substr(8, 1) === STATES_CODE.MA).toBe(true);
      });

      test('PI', () => {
        expect(cpfGenerator({ state: 'PI' }).substr(8, 1) === STATES_CODE.PI).toBe(true);
      });

      test('PB', () => {
        expect(cpfGenerator({ state: 'PB' }).substr(8, 1) === STATES_CODE.PB).toBe(true);
      });

      test('PE', () => {
        expect(cpfGenerator({ state: 'PE' }).substr(8, 1) === STATES_CODE.PE).toBe(true);
      });

      test('AL', () => {
        expect(cpfGenerator({ state: 'AL' }).substr(8, 1) === STATES_CODE.AL).toBe(true);
      });

      test('RN', () => {
        expect(cpfGenerator({ state: 'RN' }).substr(8, 1) === STATES_CODE.RN).toBe(true);
      });

      test('BA', () => {
        expect(cpfGenerator({ state: 'BA' }).substr(8, 1) === STATES_CODE.BA).toBe(true);
      });

      test('SE', () => {
        expect(cpfGenerator({ state: 'SE' }).substr(8, 1) === STATES_CODE.SE).toBe(true);
      });

      test('MG', () => {
        expect(cpfGenerator({ state: 'MG' }).substr(8, 1) === STATES_CODE.MG).toBe(true);
      });

      test('RJ', () => {
        expect(cpfGenerator({ state: 'RJ' }).substr(8, 1) === STATES_CODE.RJ).toBe(true);
      });

      test('ES', () => {
        expect(cpfGenerator({ state: 'ES' }).substr(8, 1) === STATES_CODE.ES).toBe(true);
      });

      test('SP', () => {
        expect(cpfGenerator({ state: 'SP' }).substr(8, 1) === STATES_CODE.SP).toBe(true);
      });

      test('PR', () => {
        expect(cpfGenerator({ state: 'PR' }).substr(8, 1) === STATES_CODE.PR).toBe(true);
      });

      test('SC', () => {
        expect(cpfGenerator({ state: 'SC' }).substr(8, 1) === STATES_CODE.SC).toBe(true);
      });
    });
  });
});
