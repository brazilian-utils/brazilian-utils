import { onlyNumbers, isLastChar } from '../../helpers';

export const LENGTH = 20;

export const DOT_INDEXES = [8, 12, 15];

export const HYPHEN_INDEXES = [6];

export function format(processoJuridico: string) {
  const digits = onlyNumbers(processoJuridico);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;
      if (!isLastChar(index, processoJuridico)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }
      return result;
    }, '');
}

export function isValid(processoJuridico: string): boolean {
  if (processoJuridico.length !== LENGTH) {
    return false;
  }
  try {
    const value = processoJuridico.split('');
    const digit = value.splice(7, 2).join('');

    let procJudNum = value.join('');
    procJudNum = '00000000000000000' + procJudNum;
    procJudNum = procJudNum.slice(procJudNum.length - 18);

    let b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18;
    const procDig1 = procJudNum.slice(0, 1);
    b1 = +procDig1;
    b1 = b1 * 10000000000;
    const procDig2 = procJudNum.slice(1, 2);
    b2 = +procDig2;
    b2 = b2 * 1000000000;
    const procDig3 = procJudNum.slice(2, 3);
    b3 = +procDig3;
    b3 = b3 * 100000000;
    const procDig4 = procJudNum.slice(3, 4);
    b4 = +procDig4;
    b4 = b4 * 10000000;
    const procDig5 = procJudNum.slice(4, 5);
    b5 = +procDig5;
    b5 = b5 * 1000000;
    const procDig6 = procJudNum.slice(5, 6);
    b6 = +procDig6;
    b6 = b6 * 100000;
    const procDig7 = procJudNum.slice(6, 7);
    b7 = +procDig7;
    b7 = b7 * 10000;
    const procDig8 = procJudNum.slice(7, 8);
    b8 = +procDig8;
    b8 = b8 * 1000;
    const procDig9 = procJudNum.slice(8, 9);
    b9 = +procDig9;
    b9 = b9 * 100;
    const procDig10 = procJudNum.slice(9, 10);
    b10 = +procDig10;
    b10 = b10 * 10;
    const procDig11 = procJudNum.slice(10, 11);
    b11 = +procDig11;

    const proc1a11 = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11;
    const resto1 = proc1a11 % 97;

    const procDig12 = procJudNum.slice(11, 12);
    b12 = +procDig12;
    b12 = b12 * 1000000;
    const procDig13 = procJudNum.slice(12, 13);
    b13 = +procDig13;
    b13 = b13 * 100000;
    const procDig14 = procJudNum.slice(13, 14);
    b14 = +procDig14;
    b14 = b14 * 10000;
    const procDig15 = procJudNum.slice(14, 15);
    b15 = +procDig15;
    b15 = b15 * 1000;
    const procDig16 = procJudNum.slice(15, 16);
    b16 = +procDig16;
    b16 = b16 * 100;
    const procDig17 = procJudNum.slice(16, 17);
    b17 = +procDig17;
    b17 = b17 * 10;
    const procDig18 = procJudNum.slice(17);
    b18 = +procDig18;

    const proc12a18 = b12 + b13 + b14 + b15 + b16 + b17 + b18;
    const resto2 = (resto1 * 10000000 * 100 + proc12a18 * 100) % 97;

    let digitVerifier = 98 - resto2;
    return digitVerifier === +digit;
  } catch (_) {
    return false;
  }
}
