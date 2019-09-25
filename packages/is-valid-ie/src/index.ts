import { Validator } from "./validator";

export default function isValidIE(uf: string, inscricaoEstadual: string) {
  return Validator.check(uf, inscricaoEstadual);
}
