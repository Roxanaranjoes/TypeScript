Solución — 07 Optional y Nullish

```ts
const user: { profile?: { email?: string } } = {};
const email = user.profile?.email ?? 'sin-email';
let count: number | undefined;
count ??= 0;
```
