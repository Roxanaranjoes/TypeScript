Solución — 05 unknown/any/never/void

```ts
export function isNumber(x: unknown): x is number {
  return typeof x === 'number';
}

export function assertIsString(x: unknown): asserts x is string {
  if (typeof x !== 'string') throw new Error('No es string');
}
```
