# @brazilian-utils/is-valid-boleto

Check if Boleto is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-boleto

# npm
npm install @brazilian-utils/is-valid-boleto --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/is-valid-boleto/dist/index.umd.js'></script>
```

## Usage

```js
import isValidBoleto from '@brazilian-utils/is-valid-boleto';

isValidBoleto('00190000090114971860168524522114675860000102656'); // true
isValidBoleto('4675860000102656'); // false
```
