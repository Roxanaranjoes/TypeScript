Solución — 02 Arrays y Tuplas

```ts
const punto: readonly [number, number] = [1, 2];
// punto.push(3) // Error

const nombres: ReadonlyArray<string> = ['a', 'b'];

const letras = ['a', 'b'] as const; // readonly ['a','b']
type Letras = typeof letras[number]; // 'a' | 'b'
```
