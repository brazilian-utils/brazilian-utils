# @brazilian-utils/is-valid-cpf

Check if CPF is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-cpf

# npm
npm install @brazilian-utils/is-valid-cpf --save
```

## Usage

```js
import isValidCpf from '@brazilian-utils/is-valid-cpf';

isValidCpf('94389575104'); // true
isValidCpf('943.895.751-04'); // true
isValidCpf('93319545101'); // false
isValidCpf('933.195.451-01'); // false
```
