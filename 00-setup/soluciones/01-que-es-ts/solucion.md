Solución — 01 ¿Qué es TS?

1) `saluda`:
```ts
export function saluda(nombre: string): string {
  return `Hola, ${nombre}`;
}
```

2) `Usuario`:
```ts
export interface Usuario {
  id: number;
  nombre: string;
}
```

3) Error de tipo (ejemplo):
```ts
// @ts-expect-error: número no es string
saluda(123);
```
