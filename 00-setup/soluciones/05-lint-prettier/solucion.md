Solución — 05 ESLint + Prettier

- Import desordenado:
```ts
import z from 'zod';
import fs from 'node:fs';
```
Repara con orden alfabético y grupos.

- Formato:
```ts
const mensaje = 'hola'.toUpperCase(); console.log(mensaje)
```
Corre `pnpm fmt:write` para arreglar.
