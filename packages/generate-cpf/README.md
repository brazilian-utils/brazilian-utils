# @brazilian-utils/generate-cpf

Generates a valid CPF

## Installation

```sh
# Yarn
yarn add @brazilian-utils/generate-cpf

# npm
npm install @brazilian-utils/generate-cpf --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/generate-cpf/dist/index.umd.js'></script>
```

## Usage

```js
import generateCpf from '@brazilian-utils/generate-cpf';

generateCpf(); // return a valid CPF
generateCpf({ state: 'BA' }); // return a valid CPF from Bahia state
generateCpf({ state: 'RJ' }); // return a valid CPF from Rio de Janeiro state
```
