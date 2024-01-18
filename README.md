# Santo Café

Este é um projeto realizado com o intuito de concluir um desafio na RocketSeat, no qual eu deveria desenvolver uma página web sozinho de acordo com o design feito no Figma pela equipe de Design.

Este projeto faz usos das seguintes bibliotecas/frameworks:

- TypeScript obviamente [@microsoft/TypeScript](https://github.com/microsoft/TypeScript)
- React [@meta/react](https://https://github.com/facebook/react) 
- Vite [@vitejs/vite](https://github.com/vitejs/vite)
- Styled Components [@styled-components/styled-components](https://github.com/styled-components/styled-components)
- Phosphor React, icones simples e bonitos [@phosphor-icons/react](https://github.com/phosphor-icons/react)
- ESLint, padronização/estilização/identação [@eslint/eslint](https://github.com/eslint/eslint)

## Configurando Servidor Local

Caso queira visualizar a interface na sua máquina, é bem fácil, o Vite torna isso bem simples:

- Clone o repositório em sua máquina, abra a pasta do projeto e rode os seguintes comando no seu cmd:

```js
   npm i
   npm run dev
```

- Caso queira alterar alguma configuração do servidor ou no plugin do Vite, acesse o arquivo `vite.config.ts` na raiz do projeto.
- Pro padrão o arquivo vem com o seguinte código:
```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
      plugins: [react()],
   })
```

- Por exemplo, para alterar a porta do servidor local, faça as seguinte alterações:
```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
   plugins: [react()],
      server: {
         port: 3333,
      },
   })
```

