# Utilities

Here you will find all the utilities available for use.

## isValidCPF

Check if CPF is valid.

```javascript
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

isValidCPF('155151475'); // false
```

## formatCPF

Format CPF.

```javascript
import { formatCPF } from '@brazilian-utils/brazilian-utils';

formatCPF('746506880'); // 746.506.880
formatCPF('746506880', { pad: true }); // 007.465.068-80
```

## generateCPF

Generate a valid random CPF.

```javascript
import { generateCPF } from '@brazilian-utils/brazilian-utils';

generateCPF();
```

## isValidCNPJ

Check if CNPJ is valid.

```javascript
import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';

isValidCNPJ('15515147234255'); // false
```

## formatCNPJ

Format CNPJ.

```javascript
import { formatCNPJ } from '@brazilian-utils/brazilian-utils';

formatCNPJ('245222000174'); // 24.522.200/0174
formatCNPJ('245222000174', { pad: true }); // 00.245.222/0001-74
```

## isValidCEP

Check if CEP ([brazilian postal code](https://en.wikipedia.org/wiki/C%C3%B3digo_de_Endere%C3%A7amento_Postal)) is valid.

```javascript
import { isValidCEP } from '@brazilian-utils/brazilian-utils';

isValidCEP('92500000'); // true
```

## generateCNPJ

Generate a valid random CNPJ.

```javascript
import { generateCNPJ } from '@brazilian-utils/brazilian-utils';

generateCNPJ();
```

## isValidBoleto

Check if boleto ([brazilian payment method](https://en.wikipedia.org/wiki/Boleto)) is valid.

```javascript
import { isValidBoleto } from '@brazilian-utils/brazilian-utils';

isValidBoleto('00190000090114971860168524522114675860000102656'); // true
```

## getBoletoInfo

Get information about a valid boleto ([brazilian payment method](https://en.wikipedia.org/wiki/Boleto)).

```javascript
import { getBoletoInfo } from '@brazilian-utils/brazilian-utils';

getBoletoInfo('00190000090114971860168524522114675860000102656');
// {
//   valueInCents: 102656,
//   expirationDate: 2018-07-15T03:00:00.000Z,
//   bankCode: '001'
// }
```

## isValidEmail

Check if email is valid.

```javascript
import { isValidEmail } from '@brazilian-utils/brazilian-utils';

isValidEmail('john.doe@hotmail.com'); // true
```

## isValidPhone

Check if phone number (mobile or landline) is valid.

```javascript
import { isValidPhone } from '@brazilian-utils/brazilian-utils';

isValidPhone('11900000000'); // true
```

## isValidMobilePhone

Check if mobile phone number is valid.

```javascript
import { isValidMobilePhone } from '@brazilian-utils/brazilian-utils';

isValidMobilePhone('11900000000'); // true
```

## isValidLandlinePhone

Check if landline phone number is valid.

```javascript
import { isValidLandlinePhone } from '@brazilian-utils/brazilian-utils';

isValidLandlinePhone('1130000000'); // true
```

## isValidLicensePlate

Check if license plate is valid.

```javascript
import { isValidLicensePlate } from '@brazilian-utils/brazilian-utils';

isValidLicensePlate('ABC1234'); // true
```

## isValidPIS

Check if PIS is valid.

```javascript
import { isValidPIS } from '@brazilian-utils/brazilian-utils';

isValidPIS('12056412547'); // false
```

## formatCEP

Format CEP ([brazilian postal code](https://en.wikipedia.org/wiki/C%C3%B3digo_de_Endere%C3%A7amento_Postal)).

```javascript
import { formatCEP } from '@brazilian-utils/brazilian-utils';

formatCEP('92500000'); // 92500-000
```

## isValidProcessoJuridico

Validate the processo jurídico number accordin to [CNJ's defintion](https://www.conjur.com.br/dl/resolucao-65-cnj.pdf).

```javascript
import { isValidProcessoJuridico } from '@brazilian-utils/brazilian-utils';

isValidProcessoJuridico('00020802520125150049'); // true
```

## formatProcessoJuridico

Format the processo jurídico number according to [CNJ's definition](https://www.conjur.com.br/dl/resolucao-65-cnj.pdf).

```javascript
import { formatProcessoJuridico } from '@brazilian-utils/brazilian-utils';

formatProcessoJuridico('00020802520125150049'); // 0002080-25.2012.515.0049
```

## isValidIE

Check if inscrição estadual (state registration) is valid.

```javascript
import { isValidIE } from '@brazilian-utils/brazilian-utils';

isValidIE('AC', '0187634580933'); // false
```

## capitalize

Transforms the first letter into a capital one of each word ignoring prepositions.

```javascript
import { capitalize } from '@brazilian-utils/brazilian-utils';

capitalize('josé e maria'); // José e Maria
capitalize('josé Ama MARIA', { lowerCaseWords: ['ama'] }); // José ama Maria
capitalize('doc inválido', { upperCaseWords: ['DOC'] }); // DOC Inválido
```

## formatCurrency

Formats an integer or float to a string in the BRL pattern

```javascript
import { formatCurrency } from '@brazilian-utils/brazilian-utils';

formatCurrency(10); // 10,00
formatCurrency(10756.11); // 10.756,11
formatCurrency(10756.123, { precision: 3 }); // 10.756,123
```

## parseCurrency

Transforms a string to an integer or float format

```javascript
import { parseCurrency } from '@brazilian-utils/brazilian-utils';

parseCurrency('10.756,11'); // 10756.11
parseCurrency('R$ 10.59'); // 10.59
```

## getStates

Get all Brazilian states.

```javascript
import { getStates } from '@brazilian-utils/brazilian-utils';

getStates();
// [
//   { code: 'AC', name: 'Acre' },
//   { code: 'AL', name: 'Alagoas' },
//   { code: 'AP', name: 'Amapá' },
//   { code: 'AM', name: 'Amazonas' },
//   { code: 'BA', name: 'Bahia' },
//   { code: 'CE', name: 'Ceará' },
//   { code: 'DF', name: 'Distrito Federal' },
//   { code: 'ES', name: 'Espírito Santo' },
//   { code: 'GO', name: 'Goiás' },
//   { code: 'MA', name: 'Maranhão' },
//   { code: 'MT', name: 'Mato Grosso' },
//   { code: 'MS', name: 'Mato Grosso do Sul' },
//   { code: 'MG', name: 'Minas Gerais' },
//   { code: 'PA', name: 'Pará' },
//   { code: 'PB', name: 'Paraíba' },
//   { code: 'PR', name: 'Paraná' },
//   { code: 'PE', name: 'Pernambuco' },
//   { code: 'PI', name: 'Piauí' },
//   { code: 'RJ', name: 'Rio de Janeiro' },
//   { code: 'RN', name: 'Rio Grande do Norte' },
//   { code: 'RS', name: 'Rio Grande do Sul' },
//   { code: 'RO', name: 'Rondônia' },
//   { code: 'RR', name: 'Roraima' },
//   { code: 'SC', name: 'Santa Catarina' },
//   { code: 'SP', name: 'São Paulo' },
//   { code: 'SE', name: 'Sergipe' },
//   { code: 'TO', name: 'Tocantins' },
// ]
```

## getCities

Get Brazilian cities.

```javascript
import { getCities } from '@brazilian-utils/brazilian-utils';

// Return all Brazilian cities.
getCities();
// [
//   'Abadia de Goiás',
//   'Abadia dos Dourados',
//   'Abadiânia',
//   'Abaeté',
//   'Abaetetuba',
//   'Abaiara',
//   'Abaíra',
//   'Abaré',
//   'Abatiá',
//   'Abdon Batista',
//   ... 5460 more items
// ]

// Return all Brazilian cities of the São Paulo state.
getCities('São Paulo');
getCities('SP');
// [
//   "Adamantina",
//   "Adolfo",
//   "Aguaí",
//   "Águas da Prata",
//   "Águas de Lindóia",
//   "Águas de Santa Bárbara",
//   "Águas de São Pedro",
//   "Agudos",
//   "Alambari",
//   "Alfredo Marcondes",
//   ... 635 more items
// ]
```
