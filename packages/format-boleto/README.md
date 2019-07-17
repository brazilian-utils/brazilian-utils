# @brazilian-utils/format-boleto

Return boleto formatted with mask.

## Installation

```sh
# Yarn
yarn add @brazilian-utils/format-boleto

# npm
npm install @brazilian-utils/format-boleto --save

# UMD
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/format-boleto/dist/index.umd.js'></script>
```

## Usage

```js
import formatBoleto from '@brazilian-utils/format-boleto';

formatBoleto('10491'); // 10491
formatBoleto('104914433'); // 10491.4433
formatBoleto('1049144338551190000'); // 10491.44338 55119.0000
formatBoleto('10491443385511900000200000000'); // 10491.44338 55119.000002 00000.000
formatBoleto('10491443385511900000200000000141325230000093423'); // 10491.44338 55119.000002 00000.000141 3 25230000093423

// Convênio
formatBoleto('8364000017873356004500010000000'); // 836400001787.335600450001.0000000
formatBoleto('836400001787335600450001000000002501510006150153'); // 836400001787.335600450001.000000002501.510006150153
```
