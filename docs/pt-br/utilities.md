# Utilitários

Aqui você encontrará todos os utilitários disponíveis para uso.

## isValidCPF

Valida se o CPF é válido.

```javascript
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

isValidCPF('155151475'); // false
```

## formatCPF

Formata o CPF.

```javascript
import { formatCPF } from '@brazilian-utils/brazilian-utils';

formatCPF('746506880'); // 746.506.880
formatCPF('746506880', { pad: true }); // 007.465.068-80
```

## isValidCNPJ

Valida se o CNPJ é válido.

```javascript
import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';

isValidCNPJ('15515147234255'); // false
```

## formatCNPJ

Formata o CNPJ.

```javascript
import { formatCNPJ } from '@brazilian-utils/brazilian-utils';

formatCNPJ('245222000174'); // 24.522.200/0174
formatCNPJ('245222000174', { pad: true }); // 00.245.222/0001-74
```

## isValidCEP

Valida se o CEP é válido.

```javascript
import { isValidCEP } from '@brazilian-utils/brazilian-utils';

isValidCEP('92500000'); // true
```

## isValidBoleto

Valida se o boleto é válido.

```javascript
import { isValidBoleto } from '@brazilian-utils/brazilian-utils';

isValidBoleto('00190000090114971860168524522114675860000102656'); // true
```

## isValidEmail

Valida se email é valido.

```javascript
import { isValidEmail } from '@brazilian-utils/brazilian-utils';

isValidEmail('john.doe@hotmail.com'); // true
```

## isValidPhone

Valida se o número de telefone (celular ou residencial) é valido.

```javascript
import { isValidPhone } from '@brazilian-utils/brazilian-utils';

isValidPhone('11900000000'); // true
```

## isValidMobilePhone

Valida se o número de telefone celular é valido.

```javascript
import { isValidMobilePhone } from '@brazilian-utils/brazilian-utils';

isValidMobilePhone('11900000000'); // true
```

## isValidLandlinePhone

Valida se o número de telefone residencial é valido.

```javascript
import { isValidLandlinePhone } from '@brazilian-utils/brazilian-utils';

isValidLandlinePhone('1130000000'); // true
```

## formatPhone

Formata no padrão mais comum no Brasil

```javascript
import { formatPhone } from '@brazilian-utils/brazilian-utils';

formatPhone('1188887777'); // (11) 8888-7777
formatPhone('11988887777'); // (11) 98888-7777
formatPhone('551188887777'); // +55 (11) 8888-7777
formatPhone('5511988887777'); // +55 (11) 98888-7777
```

## isValidPIS

Valida se o PIS é válido.

```javascript
import { isValidPIS } from '@brazilian-utils/brazilian-utils';

isValidPIS('12056412547'); // false
```

## formatCEP

Formata o CEP.

```javascript
import { formatCEP } from '@brazilian-utils/brazilian-utils';

formatCEP('92500000'); // 92500-000
```

## isValidIE

Valida se a inscrição estadual de um estado é valida.

```javascript
import { isValidIE } from '@brazilian-utils/brazilian-utils';

isValidIE('AC', '0187634580933'); // false
```

## capitalize

Transforma primeira letra de cada palavra em maiúscula ignorando preposições.

```javascript
import { capitalize } from '@brazilian-utils/brazilian-utils';

capitalize('josé e maria'); // José e Maria
capitalize('josé Ama MARIA', { lowerCaseWords: ['ama'] }); // José ama Maria
capitalize('doc inválido', { upperCaseWords: ['DOC'] }); // DOC Inválido
```

## formatCurrency

Formata um número inteiro ou float para uma string no padrão BRL

```javascript
import { formatCurrency } from '@brazilian-utils/brazilian-utils';

formatCurrency(10); // 10,00
formatCurrency(10756.11); // 10.756,11
formatCurrency(10756.123, { precision: 3 }); // 10.756,123
```

## parseCurrency

Transforma uma string para o formato de inteiro ou float

```javascript
import { parseCurrency } from '@brazilian-utils/brazilian-utils';

parseCurrency('10.756,11'); // 10756.11
parseCurrency('R$ 10.59'); // 10.59
```

## getStates

Retorna todos os estados brasileiros.

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

Retorna as cidades brasileiras.

```javascript
import { getCities } from '@brazilian-utils/brazilian-utils';

// Retorna todas as cidades brasileiras.
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

// Retornas todas as cidades brasileiras do estado de São Paulo.
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
