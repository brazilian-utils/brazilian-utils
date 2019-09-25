import { StateValidator } from "./validator/stateValidator";
import { Acre } from "./validator/acre";
import { Alagoas } from "./validator/alagoas";
import { Amapa } from "./validator/amapa";
import { Amazonas } from "./validator/amazonas";
import { Bahia } from "./validator/bahia";
import { Ceara } from "./validator/ceara";
import { DistritoFederal } from "./validator/distritoFederal";
import { EspiritoSanto } from "./validator/espiritoSanto";
import { Goias } from "./validator/goias";
import { Maranhao } from "./validator/maranhao";
import { MatoGrosso } from "./validator/matoGrosso";
import { MatoGrossoDoSul } from "./validator/matoGrossoDoSul";
import { MinasGerais } from "./validator/minasGerais";
import { Para } from "./validator/para";
import { Paraiba } from "./validator/paraiba";
import { Parana } from "./validator/parana";
import { Pernambuco } from "./validator/pernambuco";
import { Piaui } from "./validator/piaui";
import { RioDeJaneiro } from "./validator/rioDeJaneiro";
import { RioGrandeDoNorte } from "./validator/rioGrandeDoNorte";
import { RioGrandeDoSul } from "./validator/rioGrandeDoSul";
import { Rondonia } from "./validator/rondonia";
import { Roraima } from "./validator/roraima";
import { SantaCatarina } from "./validator/santaCatarina";
import { SaoPaulo } from "./validator/saoPaulo";
import { Sergipe } from "./validator/sergipe";
import { Tocantins } from "./validator/tocantins";

export class StateFactory {
   makeState(uf: string) : StateValidator {
      const states = <any>{};
      states['AC'] = Acre
      states['AL'] = Alagoas
      states['AM'] = Amazonas
      states['AP'] = Amapa
      states['BA'] = Bahia
      states['CE'] = Ceara
      states['DF'] = DistritoFederal
      states['ES'] = EspiritoSanto
      states['GO'] = Goias
      states['MA'] = Maranhao
      states['MT'] = MatoGrosso
      states['MS'] = MatoGrossoDoSul
      states['MG'] = MinasGerais
      states['PA'] = Para
      states['PB'] = Paraiba
      states['PR'] = Parana
      states['PE'] = Pernambuco
      states['PI'] = Piaui
      states['RJ'] = RioDeJaneiro
      states['RN'] = RioGrandeDoNorte
      states['RS'] = RioGrandeDoSul
      states['RO'] = Rondonia
      states['RR'] = Roraima
      states['SC'] = SantaCatarina
      states['SP'] = SaoPaulo
      states['SE'] = Sergipe
      states['TO'] = Tocantins

      const state = states[uf];

      if (!state) {
        throw new Error('State not found');
    }

    return new state();
   }
}
