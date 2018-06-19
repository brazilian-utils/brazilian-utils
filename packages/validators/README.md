# @brazilian-utils/validators

A collection of useful validators

## Installation

```sh
# Yarn
yarn add @brazilian-utils/validators

# npm
npm install @brazilian-utils/validators --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/validators/dist/index.umd.js'></script>
```

## Usage

```js
// named imports
import { isValidCpf, isValidCnpj } from '@brazilian-utils/validators';

// UMD
validators.isValidCpf('478457478157') // false
validators.isValidCnpj('4784574781574422') // false
```
