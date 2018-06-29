# @brazilian-utils/helper-generate-checksum

Generates a checksum

## Installation

```sh
# Yarn
yarn add @brazilian-utils/helper-generate-checksum

# npm
npm install @brazilian-utils/helper-generate-checksum --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/helper-generate-checksum/dist/index.umd.js'></script>
```

## Usage

```js
import generateChecksum from '@brazilian-utils/helper-generate-checksum';

generateChecksum(12, 10); // 28
generateChecksum(12, [10, 9]); // 28
generateChecksum(123, 10); // 52
generateChecksum(123, [10, 9, 8]); // 52
```
