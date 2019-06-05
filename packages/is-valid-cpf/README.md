# @brazilian-utils/is-valid-cpf

> Check if CPF is valid.

See our website [http://brazilian-utils.github.io](http://brazilian-utils.github.io) for more information or the [issues](https://github.com/brazilian-utils/brazilian-utils/issues?q=is%3Aissue+is-valid-cpf) associated with this package.

## Install

Using NPM:

```sh
npm install @brazilian-utils/is-valid-cpf --save
```

using Yarn

```sh
yarn add @brazilian-utils/is-valid-cpf
```

or using <script> tag

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@brazilian-utils/is-valid-cpf/dist/is-valid-cpf.umd.production.js"
></script>
```

## Usage

If you load from a **<script>** tag, you can use `isValidCpf` global. If you use **ES6** with npm, you can write `import isValidCpf from '@brazilian-utils/is-valid-cpf'`. If you use **ES5** with npm, you can write `var isValidCpf = require('@brazilian-utils/is-valid-cpf')`.

```js
isValidCpf('94389575104'); // true
isValidCpf('943.895.751-04'); // true
isValidCpf('93319545101'); // false
isValidCpf('933.195.451-01'); // false
```
