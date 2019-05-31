# @brazilian-utils/helper-only-numbers

Strips all non numeric characters.

## Installation

```sh
# Yarn
yarn add @brazilian-utils/helper-only-numbers

# npm
npm install @brazilian-utils/helper-only-numbers --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/helper-only-numbers/dist/index.umd.js'></script>
```

## Usage

```js
import onlyNumbers from '@brazilian-utils/helper-only-numbers';

onlyNumbers('123abc456?.#789xyz 0'); // 1234567890
onlyNumbers('527.328.336-12'); // 52732833612
```
