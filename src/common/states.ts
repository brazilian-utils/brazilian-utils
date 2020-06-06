export const STATES_DATA = {
  AC: {
    code: '2',
    areaCodes: [68],
    ieLength: 13,
    name: 'Acre',
  },
  AL: {
    code: '4',
    areaCodes: [82],
    ieLength: 9,
    name: 'Alagoas',
  },
  AP: {
    code: '2',
    areaCodes: [96],
    ieLength: 9,
    name: 'Amapá',
  },
  AM: {
    code: '2',
    areaCodes: [92, 97],
    ieLength: 9,
    name: 'Amazonas',
  },
  BA: {
    code: '5',
    areaCodes: [71, 73, 74, 75, 77],
    ieLength: [8, 9],
    name: 'Bahia',
  },
  CE: {
    code: '3',
    areaCodes: [85, 88],
    ieLength: 9,
    name: 'Ceará',
  },
  DF: {
    code: '1',
    areaCodes: [61],
    ieLength: 13,
    name: 'Distrito Federal',
  },
  ES: {
    code: '7',
    areaCodes: [27, 28],
    ieLength: 9,
    name: 'Espírito Santo',
  },
  GO: {
    code: '1',
    areaCodes: [62, 64],
    ieLength: 9,
    name: 'Goiás',
  },
  MA: {
    code: '3',
    areaCodes: [98, 99],
    ieLength: 9,
    name: 'Maranhão',
  },
  MG: {
    code: '6',
    areaCodes: [31, 32, 33, 34, 35, 37, 38],
    ieLength: 13,
    name: 'Minas Gerais',
  },
  MT: {
    code: '1',
    areaCodes: [65, 66],
    ieLength: 11,
    name: 'Mato Grosso',
  },
  MS: {
    code: '1',
    areaCodes: [67],
    ieLength: 9,
    name: 'Mato Grosso do Sul',
  },
  PA: {
    code: '2',
    areaCodes: [91, 93, 94],
    ieLength: 9,
    name: 'Pará',
  },
  PB: {
    code: '4',
    areaCodes: [83],
    ieLength: 9,
    name: 'Paraíba',
  },
  PE: {
    code: '4',
    areaCodes: [81, 87],
    ieLength: 9,
    name: 'Pernambuco',
  },
  PI: {
    code: '3',
    areaCodes: [86, 89],
    ieLength: 9,
    name: 'Piauí',
  },
  PR: {
    code: '9',
    areaCodes: [41, 42, 43, 44, 45, 46],
    ieLength: 10,
    name: 'Paraná',
  },
  RJ: {
    code: '7',
    areaCodes: [21, 22, 24],
    ieLength: 8,
    name: 'Rio de Janeiro',
  },
  RN: {
    code: '4',
    areaCodes: [84],
    ieLength: [9, 10],
    name: 'Rio Grande do Norte',
  },
  RO: {
    code: '2',
    areaCodes: [69],
    ieLength: 14,
    name: 'Rondônia',
  },
  RS: {
    code: '0',
    areaCodes: [51, 53, 54, 55],
    ieLength: 10,
    name: 'Rio Grande do Sul',
  },
  RR: {
    code: '2',
    areaCodes: [95],
    ieLength: 9,
    name: 'Roraima',
  },
  SC: {
    code: '9',
    areaCodes: [47, 48, 49],
    ieLength: 9,
    name: 'Santa Catarina',
  },
  SE: {
    code: '5',
    areaCodes: [79],
    ieLength: 9,
    name: 'Sergipe',
  },
  SP: {
    code: '8',
    areaCodes: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    ieLength: 12,
    name: 'São Paulo',
  },
  TO: {
    code: '1',
    areaCodes: [63],
    ieLength: [9, 11],
    name: 'Tocantins',
  },
};

export type State = keyof typeof STATES_DATA;

export type StateCode = State;

export type StateName =
  | 'Acre'
  | 'Alagoas'
  | 'Amapá'
  | 'Amazonas'
  | 'Bahia'
  | 'Ceará'
  | 'Distrito Federal'
  | 'Espírito Santo'
  | 'Goiás'
  | 'Maranhão'
  | 'Minas Gerais'
  | 'Mato Grosso'
  | 'Mato Grosso do Sul'
  | 'Pará'
  | 'Paraíba'
  | 'Pernambuco'
  | 'Piauí'
  | 'Paraná'
  | 'Rio de Janeiro'
  | 'Rio Grande do Norte'
  | 'Rondônia'
  | 'Rio Grande do Sul'
  | 'Roraima'
  | 'Santa Catarina'
  | 'Sergipe'
  | 'São Paulo'
  | 'Tocantins';

export const STATES = Object.keys(STATES_DATA) as State[];
