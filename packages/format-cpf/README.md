# @brazilian-utils/format-cpf

Return CPF formatted with mask.

## Installation

```sh
# Yarn
yarn add @brazilian-utils/format-cpf

# npm
npm install @brazilian-utils/format-cpf --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/format-cpf/dist/index.umd.js'></script>
```

## Usage

```js
import formatCpf from '@brazilian-utils/format-cpf';

formatCpf('943'); // 943
formatCpf('9438'); // 943.8
formatCpf('943895751'); // 943.895.751
formatCpf('94389575104'); // 943.895.751-04
```
