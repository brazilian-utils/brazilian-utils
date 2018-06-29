# @brazilian-utils/is-valid-titulo-eleitor

Check if Título de Eleitor is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-titulo-eleitor

# npm
npm install @brazilian-utils/is-valid-titulo-eleitor --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/is-valid-titulo-eleitor/dist/index.umd.js'></script>
```

## Usage

```js
import isValidTituloEleitor from '@brazilian-utils/is-valid-titulo-eleitor';

isValidTituloEleitor('777722870493'); // true
isValidTituloEleitor('777722870491'); // false
isValidTituloEleitor('777722870492'); // false
isValidTituloEleitor('433581880434'); // true
```
