# @brazilian-utils/is-valid-cnpj

Check if CNPJ is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-cnpj

# npm
npm install @brazilian-utils/is-valid-cnpj --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/is-valid-cnpj/dist/index.umd.js'></script>
```

## Usage

```js
import isValidCnpj from '@brazilian-utils/is-valid-cnpj';

isValidCnpj('46843485000186'); // true
isValidCnpj('46.843.485/0001-86'); // true
isValidCnpj('84348500018654'); // false
isValidCnpj('84.348.500/0186-54'); // false
```

