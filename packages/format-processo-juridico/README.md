# @brazilian-utils/format-processo-juridico

Return Processo formatted with mask.

## Installation

```sh
# Yarn
yarn add @brazilian-utils/format-processo-juridico

# npm
npm install @brazilian-utils/format-processo-juridico --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/format-processo-juridico/dist/index.umd.js'></script>
```

## Usage

```js
import formatProcesso from '@brazilian-utils/format-processo-juridico';

formatProcessoJuridico('0002080'); // 0002080
formatProcessoJuridico('0002080'); // 0002080-25
formatProcessoJuridico('0002080252012'); // 0002080-25.2012
formatProcessoJuridico('0002080252012515'); // 0002080-25.2012.515
formatProcessoJuridico('00020802520125150049'); // 0002080-25.2012.515.0049
```
