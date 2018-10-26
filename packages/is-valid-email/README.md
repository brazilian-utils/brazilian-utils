# @brazilian-utils/is-valid-email

Check if email format is valid

## Installation

```sh
# Yarn
yarn add @brazilian-utils/is-valid-email

# npm
npm install @brazilian-utils/is-valid-email --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/is-valid-email/dist/index.umd.js'></script>
```

## Usage

```js
import isValidEmail from '@brazilian-utils/is-valid-email';

isValidEmail('john.doe@hotmail.com'); // true
isValidEmail('john.doe@gmail.com'); // true
isValidEmail('john.doe@yahoo.com.br'); // true
isValidEmail('john_doe@myenterprise.com.br'); // true
isValidEmail('jóhn.doe@yahoo.com.br'); // false
isValidEmail('john&doe@yahoo.com.br'); // false
isValidEmail('john.doe.teste.com.br'); // false
isValidEmail('jóhn doe@yahoo.com.br'); // false
```
