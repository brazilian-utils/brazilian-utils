export const STATES_DATA = {
  AC: {
    code: '2',
    areaCodes: [68],
    ieLength: 13,
  },
  AL: {
    code: '4',
    areaCodes: [82],
    ieLength: 9,
  },
  AP: {
    code: '2',
    areaCodes: [96],
    ieLength: 9,
  },
  AM: {
    code: '2',
    areaCodes: [92, 97],
    ieLength: 9,
  },
  BA: {
    code: '5',
    areaCodes: [71, 73, 74, 75, 77],
    ieLength: [8, 9],
  },
  CE: {
    code: '3',
    areaCodes: [85, 88],
    ieLength: 9,
  },
  DF: {
    code: '1',
    areaCodes: [61],
    ieLength: 13,
  },
  ES: {
    code: '7',
    areaCodes: [27, 28],
    ieLength: 9,
  },
  GO: {
    code: '1',
    areaCodes: [62, 64],
    ieLength: 9,
  },
  MA: {
    code: '3',
    areaCodes: [98, 99],
    ieLength: 9,
  },
  MG: {
    code: '6',
    areaCodes: [31, 32, 33, 34, 35, 37, 38],
    ieLength: 13,
  },
  MT: {
    code: '1',
    areaCodes: [65, 66],
    ieLength: 11,
  },
  MS: {
    code: '1',
    areaCodes: [67],
    ieLength: 9,
  },
  PA: {
    code: '2',
    areaCodes: [91, 93, 94],
    ieLength: 9,
  },
  PB: {
    code: '4',
    areaCodes: [83],
    ieLength: 9,
  },
  PE: {
    code: '4',
    areaCodes: [81, 87],
    ieLength: 9,
  },
  PI: {
    code: '3',
    areaCodes: [86, 89],
    ieLength: 9,
  },
  PR: {
    code: '9',
    areaCodes: [41, 42, 43, 44, 45, 46],
    ieLength: 10,
  },
  RJ: {
    code: '7',
    areaCodes: [21, 22, 24],
    ieLength: 8,
  },
  RN: {
    code: '4',
    areaCodes: [84],
    ieLength: [9, 10],
  },
  RO: {
    code: '2',
    areaCodes: [69],
    ieLength: 14,
  },
  RS: {
    code: '0',
    areaCodes: [51, 53, 54, 55],
    ieLength: 10,
  },
  RR: {
    code: '2',
    areaCodes: [95],
    ieLength: 9,
  },
  SC: {
    code: '9',
    areaCodes: [47, 48, 49],
    ieLength: 9,
  },
  SE: {
    code: '5',
    areaCodes: [79],
    ieLength: 9,
  },
  SP: {
    code: '8',
    areaCodes: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    ieLength: 12,
  },
  TO: {
    code: '1',
    areaCodes: [63],
    ieLength: [9, 11],
  },
};

export type State = keyof typeof STATES_DATA;

export const STATES = Object.keys(STATES_DATA) as State[];
