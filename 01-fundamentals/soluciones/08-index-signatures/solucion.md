Solución — 08 Index Signatures

```ts
type Moneda = 'USD' | 'EUR';
const tasas: Record<Moneda, number> = { USD: 1, EUR: 0.9 };

function get<T extends object, K extends keyof T>(obj: T, k: K): T[K] {
  return obj[k];
}

const v = get(tasas, 'EUR');
```
