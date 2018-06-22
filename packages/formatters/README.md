# @brazilian-utils/formatters

A collection of useful formatters

## Installation

```sh
# Yarn
yarn add @brazilian-utils/formatters

# npm
npm install @brazilian-utils/formatters --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/formatters/dist/index.umd.js'></script>
```

## Usage

```js
// named imports
import { formatCpf, formatCnpj } from '@brazilian-utils/formatters';

// UMD
formatters.formatCpf('94389575104'); // 943.895.751-04
formatters.formatCnpj('46843485000186'); // 46.843.485/0001-86
```
