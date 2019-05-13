# @brazilian-utils/is-valid-pis

Check if PIS is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-pis

# npm
npm install @brazilian-utils/is-valid-pis --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/is-valid-pis/dist/index.umd.js'></script>
```

## Usage

```js
import { isValidPis } from '@brazilian-utils/is-valid-pis';

isValidPis('12081636699'); // true
isValidPis('120.8163.669-9'); // true
isValidPis('12081636639'); // false
isValidPis('120.8163.663-9'); // false
```
