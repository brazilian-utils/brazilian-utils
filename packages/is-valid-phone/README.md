# @brazilian-utils/is-valid-phone

Check if Phone is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-phone

# npm
npm install @brazilian-utils/is-valid-phone --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/is-valid-phone/dist/index.umd.js'></script>
```

## Usage

```js
import isValidPhone from '@brazilian-utils/is-valid-phone';

isValidPhone('(11) 9 0000-0000'); // true
isValidPhone('11900000000'); // true
isValidPhone('1130000000'); // true
isValidPhone('(11) 9000-0000'); // false
isValidPhone('(11) 3 0000-0000'); // false
isValidPhone('(11) 3 0000-0000'); // false
```
