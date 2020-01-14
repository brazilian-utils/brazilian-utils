export const STATES_DATA = {
  RS: {
    code: '0',
    areaCodes: [51, 53, 54, 55],
  },
  DF: {
    code: '1',
    areaCodes: [61],
  },
  GO: {
    code: '1',
    areaCodes: [62, 64],
  },
  MT: {
    code: '1',
    areaCodes: [65, 66],
  },
  MS: {
    code: '1',
    areaCodes: [67],
  },
  TO: {
    code: '1',
    areaCodes: [63],
  },
  AM: {
    code: '2',
    areaCodes: [92, 97],
  },
  PA: {
    code: '2',
    areaCodes: [91, 93, 94],
  },
  RR: {
    code: '2',
    areaCodes: [95],
  },
  AP: {
    code: '2',
    areaCodes: [96],
  },
  AC: {
    code: '2',
    areaCodes: [68],
  },
  RO: {
    code: '2',
    areaCodes: [69],
  },
  CE: {
    code: '3',
    areaCodes: [85, 88],
  },
  MA: {
    code: '3',
    areaCodes: [98, 99],
  },
  PI: {
    code: '3',
    areaCodes: [86, 89],
  },
  PB: {
    code: '4',
    areaCodes: [83],
  },
  PE: {
    code: '4',
    areaCodes: [81, 87],
  },
  AL: {
    code: '4',
    areaCodes: [82],
  },
  RN: {
    code: '4',
    areaCodes: [84],
  },
  BA: {
    code: '5',
    areaCodes: [71, 73, 74, 75, 77],
  },
  SE: {
    code: '5',
    areaCodes: [79],
  },
  MG: {
    code: '6',
    areaCodes: [31, 32, 33, 34, 35, 37, 38],
  },
  RJ: {
    code: '7',
    areaCodes: [21, 22, 24],
  },
  ES: {
    code: '7',
    areaCodes: [27, 28],
  },
  SP: {
    code: '8',
    areaCodes: [11, 12, 13, 14, 15, 16, 17, 18, 19],
  },
  PR: {
    code: '9',
    areaCodes: [41, 42, 43, 44, 45, 46],
  },
  SC: {
    code: '9',
    areaCodes: [47, 48, 49],
  },
};

export type State = keyof typeof STATES_DATA;

export const STATES = Object.keys(STATES_DATA) as State[];
