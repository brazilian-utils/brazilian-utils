# @brazilian-utils/helper-only-numbers

> Strips all non numeric characters.

See our website [http://brazilian-utils.github.io](http://brazilian-utils.github.io) for more information or the [issues](https://github.com/brazilian-utils/brazilian-utils/issues?q=is%3Aissue+helper-only-numbers) associated with this package.

## Install

Using NPM:

```sh
npm install @brazilian-utils/helper-only-numbers --save
```

using Yarn

```sh
yarn add @brazilian-utils/helper-only-numbers
```

or using <script> tag

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@brazilian-utils/helper-only-numbers/dist/helper-only-numbers.umd.production.js"
></script>
```

## Usage

```js
onlyNumbers('527.328.336-12'); // 52732833612
onlyNumbers('123abc456?.#789xyz 0'); // 1234567890
```
