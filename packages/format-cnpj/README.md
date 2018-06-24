# @brazilian-utils/format-cnpj

Return CNPJ formatted with mask.

## Installation

```sh
# Yarn
yarn add @brazilian-utils/format-cnpj

# npm
npm install @brazilian-utils/format-cnpj --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/format-cnpj/dist/index.umd.js'></script>
```

## Usage

```js
import formatCnpj from '@brazilian-utils/format-cnpj';

formatCnpj('46'); // 46
formatCnpj('468'); // 46.8
formatCnpj('468434'); // 46.843.4
formatCnpj('468434850'); // 46.843.485/0
formatCnpj('46843485000186'); // 46.843.485/0001-86
```
