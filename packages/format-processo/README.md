# @brazilian-utils/format-processo

Return Processo formatted with mask.

## Installation

```sh
# Yarn
yarn add @brazilian-utils/format-processo

# npm
npm install @brazilian-utils/format-processo --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/format-processo/dist/index.umd.js'></script>
```

## Usage

```js
import formatProcesso from '@brazilian-utils/format-processo';

formatProcesso('0002080'); // 0002080
formatProcesso('0002080'); // 0002080-25
formatProcesso('00020802012'); // 0002080-25.2012
formatProcesso('00020802012515'); // 0002080-25.2012.515
formatProcesso('000208020125150049'); // 0002080-25.2012.515.0049
```
