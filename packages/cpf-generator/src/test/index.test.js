import cpfGenerator from '../';
import { CPF_LENGTH_WITH_MASK, CPF_LENGTH_WITHOUT_MASK, STATE_CODE } from '../constants';
import isValidCpf from '../../../is-valid-cpf/src';

const cpfMask = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

describe('cpfGenerator', () => {
  describe('should have the right length', () => {
    test(`without mask (${CPF_LENGTH_WITHOUT_MASK})`, () => {
      expect(cpfGenerator().length).toBe(CPF_LENGTH_WITHOUT_MASK);
    });

    test(`with mask (${CPF_LENGTH_WITH_MASK})`, () => {
      expect(cpfGenerator({ mask: true }).length).toBe(CPF_LENGTH_WITH_MASK);
    });
  });

  describe('should return valid CPF', () => {
    test('without mask', () => {
      expect(isValidCpf(cpfGenerator())).toBe(true);
    });

    test('with mask', () => {
      expect(isValidCpf(cpfGenerator({ mask: true }))).toBe(true);
    });
  });

  test('should have the right mask', () => {
    expect(cpfMask.exec(cpfGenerator({ mask: true }))).toBeTruthy();
  });

  describe('should return a valid CPF, without mask, for each bazilian state', () => {
    describe('with Initials', () => {
      test('RS', () => {
        expect(cpfGenerator({ state: 'RS' }).substr(8, 1) === STATE_CODE.RS).toBe(true);
      });

      test('DF', () => {
        expect(cpfGenerator({ state: 'DF' }).substr(8, 1) === STATE_CODE.DF).toBe(true);
      });

      test('GO', () => {
        expect(cpfGenerator({ state: 'GO' }).substr(8, 1) === STATE_CODE.GO).toBe(true);
      });

      test('MT', () => {
        expect(cpfGenerator({ state: 'MT' }).substr(8, 1) === STATE_CODE.MT).toBe(true);
      });

      test('MS', () => {
        expect(cpfGenerator({ state: 'MS' }).substr(8, 1) === STATE_CODE.MS).toBe(true);
      });

      test('TO', () => {
        expect(cpfGenerator({ state: 'TO' }).substr(8, 1) === STATE_CODE.TO).toBe(true);
      });

      test('AM', () => {
        expect(cpfGenerator({ state: 'AM' }).substr(8, 1) === STATE_CODE.AM).toBe(true);
      });

      test('PA', () => {
        expect(cpfGenerator({ state: 'PA' }).substr(8, 1) === STATE_CODE.PA).toBe(true);
      });

      test('RR', () => {
        expect(cpfGenerator({ state: 'RR' }).substr(8, 1) === STATE_CODE.RR).toBe(true);
      });

      test('AP', () => {
        expect(cpfGenerator({ state: 'AP' }).substr(8, 1) === STATE_CODE.AP).toBe(true);
      });

      test('AC', () => {
        expect(cpfGenerator({ state: 'AC' }).substr(8, 1) === STATE_CODE.AC).toBe(true);
      });

      test('RO', () => {
        expect(cpfGenerator({ state: 'RO' }).substr(8, 1) === STATE_CODE.RO).toBe(true);
      });

      test('CE', () => {
        expect(cpfGenerator({ state: 'CE' }).substr(8, 1) === STATE_CODE.CE).toBe(true);
      });

      test('MA', () => {
        expect(cpfGenerator({ state: 'MA' }).substr(8, 1) === STATE_CODE.MA).toBe(true);
      });

      test('PI', () => {
        expect(cpfGenerator({ state: 'PI' }).substr(8, 1) === STATE_CODE.PI).toBe(true);
      });

      test('PB', () => {
        expect(cpfGenerator({ state: 'PB' }).substr(8, 1) === STATE_CODE.PB).toBe(true);
      });

      test('PE', () => {
        expect(cpfGenerator({ state: 'PE' }).substr(8, 1) === STATE_CODE.PE).toBe(true);
      });

      test('AL', () => {
        expect(cpfGenerator({ state: 'AL' }).substr(8, 1) === STATE_CODE.AL).toBe(true);
      });

      test('RN', () => {
        expect(cpfGenerator({ state: 'RN' }).substr(8, 1) === STATE_CODE.RN).toBe(true);
      });

      test('BA', () => {
        expect(cpfGenerator({ state: 'BA' }).substr(8, 1) === STATE_CODE.BA).toBe(true);
      });

      test('SE', () => {
        expect(cpfGenerator({ state: 'SE' }).substr(8, 1) === STATE_CODE.SE).toBe(true);
      });

      test('MG', () => {
        expect(cpfGenerator({ state: 'MG' }).substr(8, 1) === STATE_CODE.MG).toBe(true);
      });

      test('RJ', () => {
        expect(cpfGenerator({ state: 'RJ' }).substr(8, 1) === STATE_CODE.RJ).toBe(true);
      });

      test('ES', () => {
        expect(cpfGenerator({ state: 'ES' }).substr(8, 1) === STATE_CODE.ES).toBe(true);
      });

      test('SP', () => {
        expect(cpfGenerator({ state: 'SP' }).substr(8, 1) === STATE_CODE.SP).toBe(true);
      });

      test('PR', () => {
        expect(cpfGenerator({ state: 'PR' }).substr(8, 1) === STATE_CODE.PR).toBe(true);
      });

      test('SC', () => {
        expect(cpfGenerator({ state: 'SC' }).substr(8, 1) === STATE_CODE.SC).toBe(true);
      });
    });

    describe('with full name and title case', () => {
      test('Rio Grande do Sul', () => {
        expect(cpfGenerator({ state: 'Rio Grande do Sul' }).substr(8, 1) === STATE_CODE.RS).toBe(true);
      });

      test('Distrito Federal', () => {
        expect(cpfGenerator({ state: 'Distrito Federal' }).substr(8, 1) === STATE_CODE.DF).toBe(true);
      });

      test('Goiás', () => {
        expect(cpfGenerator({ state: 'Goiás' }).substr(8, 1) === STATE_CODE.GO).toBe(true);
      });

      test('Mato Grosso', () => {
        expect(cpfGenerator({ state: 'Mato Grosso' }).substr(8, 1) === STATE_CODE.MT).toBe(true);
      });

      test('Mato Grosso do Sul', () => {
        expect(cpfGenerator({ state: 'Mato Grosso do Sul' }).substr(8, 1) === STATE_CODE.MS).toBe(true);
      });

      test('Tocantins', () => {
        expect(cpfGenerator({ state: 'Tocantins' }).substr(8, 1) === STATE_CODE.TO).toBe(true);
      });

      test('Amazonas', () => {
        expect(cpfGenerator({ state: 'Amazonas' }).substr(8, 1) === STATE_CODE.AM).toBe(true);
      });

      test('Pará', () => {
        expect(cpfGenerator({ state: 'Pará' }).substr(8, 1) === STATE_CODE.PA).toBe(true);
      });

      test('Roraima', () => {
        expect(cpfGenerator({ state: 'Roraima' }).substr(8, 1) === STATE_CODE.RR).toBe(true);
      });

      test('Amapá', () => {
        expect(cpfGenerator({ state: 'Amapá' }).substr(8, 1) === STATE_CODE.AP).toBe(true);
      });

      test('Acre', () => {
        expect(cpfGenerator({ state: 'Acre' }).substr(8, 1) === STATE_CODE.AC).toBe(true);
      });

      test('Rondônia', () => {
        expect(cpfGenerator({ state: 'Rondônia' }).substr(8, 1) === STATE_CODE.RO).toBe(true);
      });

      test('Ceará', () => {
        expect(cpfGenerator({ state: 'Ceará' }).substr(8, 1) === STATE_CODE.CE).toBe(true);
      });

      test('Maranhão', () => {
        expect(cpfGenerator({ state: 'Maranhão' }).substr(8, 1) === STATE_CODE.MA).toBe(true);
      });

      test('Piauí', () => {
        expect(cpfGenerator({ state: 'Piauí' }).substr(8, 1) === STATE_CODE.PI).toBe(true);
      });

      test('Paraíba', () => {
        expect(cpfGenerator({ state: 'Paraíba' }).substr(8, 1) === STATE_CODE.PB).toBe(true);
      });

      test('Pernambuco', () => {
        expect(cpfGenerator({ state: 'Pernambuco' }).substr(8, 1) === STATE_CODE.PE).toBe(true);
      });

      test('Alagoas', () => {
        expect(cpfGenerator({ state: 'Alagoas' }).substr(8, 1) === STATE_CODE.AL).toBe(true);
      });

      test('Rio Grande do Norte', () => {
        expect(cpfGenerator({ state: 'Rio Grande do Norte' }).substr(8, 1) === STATE_CODE.RN).toBe(true);
      });

      test('Bahia', () => {
        expect(cpfGenerator({ state: 'Bahia' }).substr(8, 1) === STATE_CODE.BA).toBe(true);
      });

      test('Sergipe', () => {
        expect(cpfGenerator({ state: 'Sergipe' }).substr(8, 1) === STATE_CODE.SE).toBe(true);
      });

      test('Minas Gerais', () => {
        expect(cpfGenerator({ state: 'Minas Gerais' }).substr(8, 1) === STATE_CODE.MG).toBe(true);
      });

      test('Rio de Janeiro', () => {
        expect(cpfGenerator({ state: 'Rio de Janeiro' }).substr(8, 1) === STATE_CODE.RJ).toBe(true);
      });

      test('Espirito Santo', () => {
        expect(cpfGenerator({ state: 'Espirito Santo' }).substr(8, 1) === STATE_CODE.ES).toBe(true);
      });

      test('São Paulo', () => {
        expect(cpfGenerator({ state: 'São Paulo' }).substr(8, 1) === STATE_CODE.SP).toBe(true);
      });

      test('Paraná', () => {
        expect(cpfGenerator({ state: 'Paraná' }).substr(8, 1) === STATE_CODE.PR).toBe(true);
      });

      test('Santa Catarina', () => {
        expect(cpfGenerator({ state: 'Santa Catarina' }).substr(8, 1) === STATE_CODE.SC).toBe(true);
      });
    });

    describe('with full name and lower case', () => {
      test('rio grande do sul', () => {
        expect(cpfGenerator({ state: 'rio grande do sul' }).substr(8, 1) === STATE_CODE.RS).toBe(true);
      });

      test('distrito federal', () => {
        expect(cpfGenerator({ state: 'distrito federal' }).substr(8, 1) === STATE_CODE.DF).toBe(true);
      });

      test('goiás', () => {
        expect(cpfGenerator({ state: 'goiás' }).substr(8, 1) === STATE_CODE.GO).toBe(true);
      });

      test('mato grosso', () => {
        expect(cpfGenerator({ state: 'mato grosso' }).substr(8, 1) === STATE_CODE.MT).toBe(true);
      });

      test('mato grosso do sul', () => {
        expect(cpfGenerator({ state: 'mato grosso do sul' }).substr(8, 1) === STATE_CODE.MS).toBe(true);
      });

      test('tocantins', () => {
        expect(cpfGenerator({ state: 'tocantins' }).substr(8, 1) === STATE_CODE.TO).toBe(true);
      });

      test('amazonas', () => {
        expect(cpfGenerator({ state: 'amazonas' }).substr(8, 1) === STATE_CODE.AM).toBe(true);
      });

      test('pará', () => {
        expect(cpfGenerator({ state: 'pará' }).substr(8, 1) === STATE_CODE.PA).toBe(true);
      });

      test('roraima', () => {
        expect(cpfGenerator({ state: 'roraima' }).substr(8, 1) === STATE_CODE.RR).toBe(true);
      });

      test('amapá', () => {
        expect(cpfGenerator({ state: 'amapá' }).substr(8, 1) === STATE_CODE.AP).toBe(true);
      });

      test('acre', () => {
        expect(cpfGenerator({ state: 'acre' }).substr(8, 1) === STATE_CODE.AC).toBe(true);
      });

      test('rondônia', () => {
        expect(cpfGenerator({ state: 'rondônia' }).substr(8, 1) === STATE_CODE.RO).toBe(true);
      });

      test('ceará', () => {
        expect(cpfGenerator({ state: 'ceará' }).substr(8, 1) === STATE_CODE.CE).toBe(true);
      });

      test('maranhão', () => {
        expect(cpfGenerator({ state: 'maranhão' }).substr(8, 1) === STATE_CODE.MA).toBe(true);
      });

      test('piauí', () => {
        expect(cpfGenerator({ state: 'piauí' }).substr(8, 1) === STATE_CODE.PI).toBe(true);
      });

      test('paraíba', () => {
        expect(cpfGenerator({ state: 'paraíba' }).substr(8, 1) === STATE_CODE.PB).toBe(true);
      });

      test('pernambuco', () => {
        expect(cpfGenerator({ state: 'pernambuco' }).substr(8, 1) === STATE_CODE.PE).toBe(true);
      });

      test('alagoas', () => {
        expect(cpfGenerator({ state: 'alagoas' }).substr(8, 1) === STATE_CODE.AL).toBe(true);
      });

      test('rio grande do norte', () => {
        expect(cpfGenerator({ state: 'rio grande do norte' }).substr(8, 1) === STATE_CODE.RN).toBe(true);
      });

      test('bahia', () => {
        expect(cpfGenerator({ state: 'bahia' }).substr(8, 1) === STATE_CODE.BA).toBe(true);
      });

      test('sergipe', () => {
        expect(cpfGenerator({ state: 'sergipe' }).substr(8, 1) === STATE_CODE.SE).toBe(true);
      });

      test('minas gerais', () => {
        expect(cpfGenerator({ state: 'minas gerais' }).substr(8, 1) === STATE_CODE.MG).toBe(true);
      });

      test('rio de janeiro', () => {
        expect(cpfGenerator({ state: 'rio de janeiro' }).substr(8, 1) === STATE_CODE.RJ).toBe(true);
      });

      test('espirito santo', () => {
        expect(cpfGenerator({ state: 'espirito santo' }).substr(8, 1) === STATE_CODE.ES).toBe(true);
      });

      test('são paulo', () => {
        expect(cpfGenerator({ state: 'são paulo' }).substr(8, 1) === STATE_CODE.SP).toBe(true);
      });

      test('paraná', () => {
        expect(cpfGenerator({ state: 'paraná' }).substr(8, 1) === STATE_CODE.PR).toBe(true);
      });

      test('santa catarina', () => {
        expect(cpfGenerator({ state: 'santa catarina' }).substr(8, 1) === STATE_CODE.SC).toBe(true);
      });
    });
  });

  describe('should return a valid CPF, with mask, for each bazilian state', () => {
    describe('with Initials', () => {
      test('RS', () => {
        expect(cpfGenerator({ mask: true, state: 'RS' }).substr(8, 1) === STATE_CODE.RS).toBe(true);
      });

      test('DF', () => {
        expect(cpfGenerator({ mask: true, state: 'DF' }).substr(8, 1) === STATE_CODE.DF).toBe(true);
      });

      test('GO', () => {
        expect(cpfGenerator({ mask: true, state: 'GO' }).substr(8, 1) === STATE_CODE.GO).toBe(true);
      });

      test('MT', () => {
        expect(cpfGenerator({ mask: true, state: 'MT' }).substr(8, 1) === STATE_CODE.MT).toBe(true);
      });

      test('MS', () => {
        expect(cpfGenerator({ mask: true, state: 'MS' }).substr(8, 1) === STATE_CODE.MS).toBe(true);
      });

      test('TO', () => {
        expect(cpfGenerator({ mask: true, state: 'TO' }).substr(8, 1) === STATE_CODE.TO).toBe(true);
      });

      test('AM', () => {
        expect(cpfGenerator({ mask: true, state: 'AM' }).substr(8, 1) === STATE_CODE.AM).toBe(true);
      });

      test('PA', () => {
        expect(cpfGenerator({ mask: true, state: 'PA' }).substr(8, 1) === STATE_CODE.PA).toBe(true);
      });

      test('RR', () => {
        expect(cpfGenerator({ mask: true, state: 'RR' }).substr(8, 1) === STATE_CODE.RR).toBe(true);
      });

      test('AP', () => {
        expect(cpfGenerator({ mask: true, state: 'AP' }).substr(8, 1) === STATE_CODE.AP).toBe(true);
      });

      test('AC', () => {
        expect(cpfGenerator({ mask: true, state: 'AC' }).substr(8, 1) === STATE_CODE.AC).toBe(true);
      });

      test('RO', () => {
        expect(cpfGenerator({ mask: true, state: 'RO' }).substr(8, 1) === STATE_CODE.RO).toBe(true);
      });

      test('CE', () => {
        expect(cpfGenerator({ mask: true, state: 'CE' }).substr(8, 1) === STATE_CODE.CE).toBe(true);
      });

      test('MA', () => {
        expect(cpfGenerator({ mask: true, state: 'MA' }).substr(8, 1) === STATE_CODE.MA).toBe(true);
      });

      test('PI', () => {
        expect(cpfGenerator({ mask: true, state: 'PI' }).substr(8, 1) === STATE_CODE.PI).toBe(true);
      });

      test('PB', () => {
        expect(cpfGenerator({ mask: true, state: 'PB' }).substr(8, 1) === STATE_CODE.PB).toBe(true);
      });

      test('PE', () => {
        expect(cpfGenerator({ mask: true, state: 'PE' }).substr(8, 1) === STATE_CODE.PE).toBe(true);
      });

      test('AL', () => {
        expect(cpfGenerator({ mask: true, state: 'AL' }).substr(8, 1) === STATE_CODE.AL).toBe(true);
      });

      test('RN', () => {
        expect(cpfGenerator({ mask: true, state: 'RN' }).substr(8, 1) === STATE_CODE.RN).toBe(true);
      });

      test('BA', () => {
        expect(cpfGenerator({ mask: true, state: 'BA' }).substr(8, 1) === STATE_CODE.BA).toBe(true);
      });

      test('SE', () => {
        expect(cpfGenerator({ mask: true, state: 'SE' }).substr(8, 1) === STATE_CODE.SE).toBe(true);
      });

      test('MG', () => {
        expect(cpfGenerator({ mask: true, state: 'MG' }).substr(8, 1) === STATE_CODE.MG).toBe(true);
      });

      test('RJ', () => {
        expect(cpfGenerator({ mask: true, state: 'RJ' }).substr(8, 1) === STATE_CODE.RJ).toBe(true);
      });

      test('ES', () => {
        expect(cpfGenerator({ mask: true, state: 'ES' }).substr(8, 1) === STATE_CODE.ES).toBe(true);
      });

      test('SP', () => {
        expect(cpfGenerator({ mask: true, state: 'SP' }).substr(8, 1) === STATE_CODE.SP).toBe(true);
      });

      test('PR', () => {
        expect(cpfGenerator({ mask: true, state: 'PR' }).substr(8, 1) === STATE_CODE.PR).toBe(true);
      });

      test('SC', () => {
        expect(cpfGenerator({ mask: true, state: 'SC' }).substr(8, 1) === STATE_CODE.SC).toBe(true);
      });
    });

    describe('with full name and title case', () => {
      test('Rio Grande do Sul', () => {
        expect(cpfGenerator({ mask: true, state: 'Rio Grande do Sul' }).substr(8, 1) === STATE_CODE.RS).toBe(true);
      });

      test('Distrito Federal', () => {
        expect(cpfGenerator({ mask: true, state: 'Distrito Federal' }).substr(8, 1) === STATE_CODE.DF).toBe(true);
      });

      test('Goiás', () => {
        expect(cpfGenerator({ mask: true, state: 'Goiás' }).substr(8, 1) === STATE_CODE.GO).toBe(true);
      });

      test('Mato Grosso', () => {
        expect(cpfGenerator({ mask: true, state: 'Mato Grosso' }).substr(8, 1) === STATE_CODE.MT).toBe(true);
      });

      test('Mato Grosso do Sul', () => {
        expect(cpfGenerator({ mask: true, state: 'Mato Grosso do Sul' }).substr(8, 1) === STATE_CODE.MS).toBe(true);
      });

      test('Tocantins', () => {
        expect(cpfGenerator({ mask: true, state: 'Tocantins' }).substr(8, 1) === STATE_CODE.TO).toBe(true);
      });

      test('Amazonas', () => {
        expect(cpfGenerator({ mask: true, state: 'Amazonas' }).substr(8, 1) === STATE_CODE.AM).toBe(true);
      });

      test('Pará', () => {
        expect(cpfGenerator({ mask: true, state: 'Pará' }).substr(8, 1) === STATE_CODE.PA).toBe(true);
      });

      test('Roraima', () => {
        expect(cpfGenerator({ mask: true, state: 'Roraima' }).substr(8, 1) === STATE_CODE.RR).toBe(true);
      });

      test('Amapá', () => {
        expect(cpfGenerator({ mask: true, state: 'Amapá' }).substr(8, 1) === STATE_CODE.AP).toBe(true);
      });

      test('Acre', () => {
        expect(cpfGenerator({ mask: true, state: 'Acre' }).substr(8, 1) === STATE_CODE.AC).toBe(true);
      });

      test('Rondônia', () => {
        expect(cpfGenerator({ mask: true, state: 'Rondônia' }).substr(8, 1) === STATE_CODE.RO).toBe(true);
      });

      test('Ceará', () => {
        expect(cpfGenerator({ mask: true, state: 'Ceará' }).substr(8, 1) === STATE_CODE.CE).toBe(true);
      });

      test('Maranhão', () => {
        expect(cpfGenerator({ mask: true, state: 'Maranhão' }).substr(8, 1) === STATE_CODE.MA).toBe(true);
      });

      test('Piauí', () => {
        expect(cpfGenerator({ mask: true, state: 'Piauí' }).substr(8, 1) === STATE_CODE.PI).toBe(true);
      });

      test('Paraíba', () => {
        expect(cpfGenerator({ mask: true, state: 'Paraíba' }).substr(8, 1) === STATE_CODE.PB).toBe(true);
      });

      test('Pernambuco', () => {
        expect(cpfGenerator({ mask: true, state: 'Pernambuco' }).substr(8, 1) === STATE_CODE.PE).toBe(true);
      });

      test('Alagoas', () => {
        expect(cpfGenerator({ mask: true, state: 'Alagoas' }).substr(8, 1) === STATE_CODE.AL).toBe(true);
      });

      test('Rio Grande do Norte', () => {
        expect(cpfGenerator({ mask: true, state: 'Rio Grande do Norte' }).substr(8, 1) === STATE_CODE.RN).toBe(true);
      });

      test('Bahia', () => {
        expect(cpfGenerator({ mask: true, state: 'Bahia' }).substr(8, 1) === STATE_CODE.BA).toBe(true);
      });

      test('Sergipe', () => {
        expect(cpfGenerator({ mask: true, state: 'Sergipe' }).substr(8, 1) === STATE_CODE.SE).toBe(true);
      });

      test('Minas Gerais', () => {
        expect(cpfGenerator({ mask: true, state: 'Minas Gerais' }).substr(8, 1) === STATE_CODE.MG).toBe(true);
      });

      test('Rio de Janeiro', () => {
        expect(cpfGenerator({ mask: true, state: 'Rio de Janeiro' }).substr(8, 1) === STATE_CODE.RJ).toBe(true);
      });

      test('Espirito Santo', () => {
        expect(cpfGenerator({ mask: true, state: 'Espirito Santo' }).substr(8, 1) === STATE_CODE.ES).toBe(true);
      });

      test('São Paulo', () => {
        expect(cpfGenerator({ mask: true, state: 'São Paulo' }).substr(8, 1) === STATE_CODE.SP).toBe(true);
      });

      test('Paraná', () => {
        expect(cpfGenerator({ mask: true, state: 'Paraná' }).substr(8, 1) === STATE_CODE.PR).toBe(true);
      });

      test('Santa Catarina', () => {
        expect(cpfGenerator({ mask: true, state: 'Santa Catarina' }).substr(8, 1) === STATE_CODE.SC).toBe(true);
      });
    });

    describe('with full name and lower case', () => {
      test('rio grande do sul', () => {
        expect(cpfGenerator({ mask: true, state: 'rio grande do sul' }).substr(8, 1) === STATE_CODE.RS).toBe(true);
      });

      test('distrito federal', () => {
        expect(cpfGenerator({ mask: true, state: 'distrito federal' }).substr(8, 1) === STATE_CODE.DF).toBe(true);
      });

      test('goiás', () => {
        expect(cpfGenerator({ mask: true, state: 'goiás' }).substr(8, 1) === STATE_CODE.GO).toBe(true);
      });

      test('mato grosso', () => {
        expect(cpfGenerator({ mask: true, state: 'mato grosso' }).substr(8, 1) === STATE_CODE.MT).toBe(true);
      });

      test('mato grosso do sul', () => {
        expect(cpfGenerator({ mask: true, state: 'mato grosso do sul' }).substr(8, 1) === STATE_CODE.MS).toBe(true);
      });

      test('tocantins', () => {
        expect(cpfGenerator({ mask: true, state: 'tocantins' }).substr(8, 1) === STATE_CODE.TO).toBe(true);
      });

      test('amazonas', () => {
        expect(cpfGenerator({ mask: true, state: 'amazonas' }).substr(8, 1) === STATE_CODE.AM).toBe(true);
      });

      test('pará', () => {
        expect(cpfGenerator({ mask: true, state: 'pará' }).substr(8, 1) === STATE_CODE.PA).toBe(true);
      });

      test('roraima', () => {
        expect(cpfGenerator({ mask: true, state: 'roraima' }).substr(8, 1) === STATE_CODE.RR).toBe(true);
      });

      test('amapá', () => {
        expect(cpfGenerator({ mask: true, state: 'amapá' }).substr(8, 1) === STATE_CODE.AP).toBe(true);
      });

      test('acre', () => {
        expect(cpfGenerator({ mask: true, state: 'acre' }).substr(8, 1) === STATE_CODE.AC).toBe(true);
      });

      test('rondônia', () => {
        expect(cpfGenerator({ mask: true, state: 'rondônia' }).substr(8, 1) === STATE_CODE.RO).toBe(true);
      });

      test('ceará', () => {
        expect(cpfGenerator({ mask: true, state: 'ceará' }).substr(8, 1) === STATE_CODE.CE).toBe(true);
      });

      test('maranhão', () => {
        expect(cpfGenerator({ mask: true, state: 'maranhão' }).substr(8, 1) === STATE_CODE.MA).toBe(true);
      });

      test('piauí', () => {
        expect(cpfGenerator({ mask: true, state: 'piauí' }).substr(8, 1) === STATE_CODE.PI).toBe(true);
      });

      test('paraíba', () => {
        expect(cpfGenerator({ mask: true, state: 'paraíba' }).substr(8, 1) === STATE_CODE.PB).toBe(true);
      });

      test('pernambuco', () => {
        expect(cpfGenerator({ mask: true, state: 'pernambuco' }).substr(8, 1) === STATE_CODE.PE).toBe(true);
      });

      test('alagoas', () => {
        expect(cpfGenerator({ mask: true, state: 'alagoas' }).substr(8, 1) === STATE_CODE.AL).toBe(true);
      });

      test('rio grande do norte', () => {
        expect(cpfGenerator({ mask: true, state: 'rio grande do norte' }).substr(8, 1) === STATE_CODE.RN).toBe(true);
      });

      test('bahia', () => {
        expect(cpfGenerator({ mask: true, state: 'bahia' }).substr(8, 1) === STATE_CODE.BA).toBe(true);
      });

      test('sergipe', () => {
        expect(cpfGenerator({ mask: true, state: 'sergipe' }).substr(8, 1) === STATE_CODE.SE).toBe(true);
      });

      test('minas gerais', () => {
        expect(cpfGenerator({ mask: true, state: 'minas gerais' }).substr(8, 1) === STATE_CODE.MG).toBe(true);
      });

      test('rio de janeiro', () => {
        expect(cpfGenerator({ mask: true, state: 'rio de janeiro' }).substr(8, 1) === STATE_CODE.RJ).toBe(true);
      });

      test('espirito santo', () => {
        expect(cpfGenerator({ mask: true, state: 'espirito santo' }).substr(8, 1) === STATE_CODE.ES).toBe(true);
      });

      test('são paulo', () => {
        expect(cpfGenerator({ mask: true, state: 'são paulo' }).substr(8, 1) === STATE_CODE.SP).toBe(true);
      });

      test('paraná', () => {
        expect(cpfGenerator({ mask: true, state: 'paraná' }).substr(8, 1) === STATE_CODE.PR).toBe(true);
      });

      test('santa catarina', () => {
        expect(cpfGenerator({ mask: true, state: 'santa catarina' }).substr(8, 1) === STATE_CODE.SC).toBe(true);
      });
    });
  });
});
