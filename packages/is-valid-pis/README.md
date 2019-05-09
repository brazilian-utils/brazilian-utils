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

isValidCpf('12081636699'); // true
isValidCpf('120.8163.669-9'); // true
isValidCpf('12081636639'); // false
isValidCpf('120.8163.663-9'); // false
```
