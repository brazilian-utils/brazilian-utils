export const STATES_DATA = {
  RS: {
    code: '0',
    ddds: [51, 53, 54, 55],
  },
  DF: {
    code: '1',
    ddds: [61],
  },
  GO: {
    code: '1',
    ddds: [62, 64],
  },
  MT: {
    code: '1',
    ddds: [65, 66],
  },
  MS: {
    code: '1',
    ddds: [67],
  },
  TO: {
    code: '1',
    ddds: [63],
  },
  AM: {
    code: '2',
    ddds: [92, 97],
  },
  PA: {
    code: '2',
    ddds: [91, 93, 94],
  },
  RR: {
    code: '2',
    ddds: [95],
  },
  AP: {
    code: '2',
    ddds: [96],
  },
  AC: {
    code: '2',
    ddds: [68],
  },
  RO: {
    code: '2',
    ddds: [69],
  },
  CE: {
    code: '3',
    ddds: [85, 88],
  },
  MA: {
    code: '3',
    ddds: [98, 99],
  },
  PI: {
    code: '3',
    ddds: [86, 89],
  },
  PB: {
    code: '4',
    ddds: [83],
  },
  PE: {
    code: '4',
    ddds: [81, 87],
  },
  AL: {
    code: '4',
    ddds: [82],
  },
  RN: {
    code: '4',
    ddds: [84],
  },
  BA: {
    code: '5',
    ddds: [71, 73, 74, 75, 77],
  },
  SE: {
    code: '5',
    ddds: [79],
  },
  MG: {
    code: '6',
    ddds: [31, 32, 33, 34, 35, 37, 38],
  },
  RJ: {
    code: '7',
    ddds: [21, 22, 24],
  },
  ES: {
    code: '7',
    ddds: [27, 28],
  },
  SP: {
    code: '8',
    ddds: [11, 12, 13, 14, 15, 16, 17, 18, 19],
  },
  PR: {
    code: '9',
    ddds: [41, 42, 43, 44, 45, 46],
  },
  SC: {
    code: '9',
    ddds: [47, 48, 49],
  },
};

export type State = keyof typeof STATES_DATA;

export const STATES = Object.keys(STATES_DATA) as State[];
