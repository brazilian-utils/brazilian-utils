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
import formatcnpj from '@brazilian-utils/format-cnpj';

formatcnpj('46'); // 46
formatcnpj('468'); // 46.8
formatcnpj('468434'); // 46.843.4
formatcnpj('468434850'); // 46.843.485/0
formatcnpj('46843485000186'); // 46.843.485/0001-86
```
