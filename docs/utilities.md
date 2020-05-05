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

## isValidBoleto

Check if boleto ([brazilian payment method](https://en.wikipedia.org/wiki/Boleto)) is valid.

```javascript
import { isValidBoleto } from '@brazilian-utils/brazilian-utils';

isValidBoleto('00190000090114971860168524522114675860000102656'); // true
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

## isValidIE

Check if inscrição estadual (state registration) is valid.

```javascript
import { isValidIE } from '@brazilian-utils/brazilian-utils';

isValidIE('AC', '0187634580933'); // false
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
