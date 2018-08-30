# @brazilian-utils/is-valid-cep

Check if CEP is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-cep

# npm
npm install @brazilian-utils/is-valid-cep --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/is-valid-cep/dist/index.umd.js'></script>
```

## Usage

```js
import isValidCep from '@brazilian-utils/is-valid-cep';

isValidCep('92500000'); // true
isValidCep('92500-000'); // true
isValidCep('8434850001'); // false
```

