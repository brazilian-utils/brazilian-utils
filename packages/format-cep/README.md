# @brazilian-utils/format-cep

Return CEP formatted with mask.

## Installation

```sh
# Yarn
yarn add @brazilian-utils/format-cep

# npm
npm install @brazilian-utils/format-cep --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/format-cep/dist/index.umd.js'></script>
```

## Usage

```js
import formatCep from '@brazilian-utils/format-cep';

formatCep('010'); // 010
formatCep('01001'); // 01001
formatCep('01001000'); // 01001-000
```
