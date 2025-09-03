Solución — 01 Primitivos; type vs interface

```ts
type Punto = { x: number; y: number };
interface ConNombre { nombre: string }
interface ConNombre { apellido?: string }

type PuntoConNombre = Punto & ConNombre;

const p: PuntoConNombre = { x: 1, y: 2, nombre: 'Ada' };
```
