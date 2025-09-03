Solución — 06 Narrowing

```ts
type Circle = { kind: 'circle'; r: number };
type Square = { kind: 'square'; s: number };
type Shape = Circle | Square;

function area(x: Shape): number {
  switch (x.kind) {
    case 'circle':
      return Math.PI * x.r * x.r;
    case 'square':
      return x.s * x.s;
    default: {
      const _exhaustive: never = x;
      return _exhaustive;
    }
  }
}

function show(e: Error | string) {
  if (e instanceof Error) return e.message;
  return e.toUpperCase();
}
```
