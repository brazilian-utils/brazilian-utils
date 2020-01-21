# Utilities

Here you will find all the utilities available for use.

## isValidCPF

Check if CPF is valid.

```javascript
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

isValidCPF('155151475'); // false
```

## isValidCNPJ

Check if CNPJ is valid.

```javascript
import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';

isValidCNPJ('15515147234255'); // false
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