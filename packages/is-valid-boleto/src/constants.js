/* eslint-disable import/prefer-default-export */

export const PARTIALS_TO_VERIFY_MOD_10 = [
  {
    start: 0,
    end: 9,
    digitIndex: 9,
  },
  {
    start: 10,
    end: 20,
    digitIndex: 20,
  },
  {
    start: 21,
    end: 31,
    digitIndex: 31,
  },
];

export const DIGITABLE_LINE_LENGTH = 47;

export const CHECK_DIGIT_MOD_11_POSITION = 4;

export const MOD_11_WEIGHTS = {
  initial: 2,
  end: 9,
  increment: 1,
};

export const MOD_10_WEIGHTS = [2, 1];
