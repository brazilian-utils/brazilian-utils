# Getting Started

Brazilian Utils is a library focused on solving problems that we face daily in the development of applications for the Brazilian business.

## Installation

Using **Brazilian Utils** is quite simple and you can use it in some ways:

as npm package:

```bash
npm install --save @brazilian-utils/brazilian-utils
```

with yarn package manager:

```bash
yarn add @brazilian-utils/brazilian-utils
```

or `<script>` tag (global `brazilianUtils`):

```html
<script src="https://unpkg.com/@brazilian-utils/brazilian-utils/dist/brazilian-utils.cjs.production.min.js"></script>
```

## Usage

To use one of our utilities you just need to import the required function as in the example below:

```javascript
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

isValidCPF('1232454233345'); // false
```

You can check a list of utilities [by clicking here](utilities.md).
