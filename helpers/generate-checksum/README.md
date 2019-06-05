# @brazilian-utils/helper-generate-checksum

> Generates a checksum

See our website [http://brazilian-utils.github.io](http://brazilian-utils.github.io) for more information or the [issues](https://github.com/brazilian-utils/brazilian-utils/issues?q=is%3Aissue+helper-generate-checksum) associated with this package.

## Install

Using NPM:

```sh
npm install @brazilian-utils/helper-generate-checksum --save
```

using Yarn

```sh
yarn add @brazilian-utils/helper-generate-checksum
```

or using <script> tag

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@brazilian-utils/helper-generate-checksum/dist/helper-generate-checksum.umd.production.js"
></script>
```

## Usage

```js
generateChecksum(12, 10); // 28
generateChecksum(123, 10); // 52
generateChecksum(12, [10, 9]); // 28
generateChecksum(123, [10, 9, 8]); // 52
```
