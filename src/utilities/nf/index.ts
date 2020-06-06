import { isValid } from '../cnpj/index';
export const LENGTH = 44;

const NF = {
  UF: {
    start: 0,
    end: 2,
  },
  YEARMONTH: {
    start: 2,
    end: 6,
  },
  CNPJ: {
    start: 6,
    end: 20,
  },
  MODEL: {
    start: 20,
    end: 22,
  },
  SERIES: {
    start: 22,
    end: 25,
  },
  NUMBER: {
    start: 25,
    end: 34,
  },
  CODESYSTEM: {
    start: 34,
    end: 43,
  },
  DV: {
    start: 43,
    end: 44,
  },
};

export function getUF(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.UF.start, NF.UF.end);
}

export function getYearMonth(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.YEARMONTH.start, NF.YEARMONTH.end);
}

export function getCNPJ(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.CNPJ.start, NF.CNPJ.end);
}

export function getModel(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.MODEL.start, NF.MODEL.end);
}
export function getSeries(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.SERIES.start, NF.SERIES.end);
}

export function getNumber(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.NUMBER.start, NF.NUMBER.end);
}

export function getCodeOfSystem(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.CODESYSTEM.start, NF.CODESYSTEM.end);
}

export function getDv(chaveAcesso: string): string {
  return chaveAcesso.slice(NF.DV.start, NF.DV.end);
}
export function isValidNf(chaveAcesso: string): boolean {
  if (!chaveAcesso || typeof chaveAcesso !== 'string') return false;
  return chaveAcesso.length == LENGTH;
}

export function isCnpjValid(chaveAcesso: string): boolean {
  return isValid(chaveAcesso.slice(NF.CNPJ.start, NF.CNPJ.end));
}
