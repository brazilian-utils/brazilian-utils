# Introdução

Brazilian Utils é uma biblioteca com foco na resolução de problemas que enfrentamos diariamente no desenvolvimento de aplicações para o business brasileiro.

## Instalação

Utilizar o **Brazilian Utils** é bem simples e você pode utiliza-lo de duas formas:

como um pacote npm:

```bash
npm install --save @brazilian-utils/brazilian-utils
```

ou `<script>` tag (global `brazilianUtils`):

```html
<script src="https://unpkg.com/@brazilian-utils/brazilian-utils/dist/brazilian-utils.cjs.production.min.js"></script>
```

## Como usar

Para usar um de nossos utilitários, basta importar a função necessária, como no exemplo abaixo:

```javascript
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

isValidCPF('1232454233345'); // false
```

Você pode conferir a lista de útilitários [clicando aqui](pt-br/utilities.md).
