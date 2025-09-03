Solución — 03 tsconfig

1) `exactOptionalPropertyTypes`:
```ts
type User = { id: number; nick?: string };
const u: User = { id: 1 };
// u.nick está estrictamente ausente; asignar `undefined` es distinto a ausente.
```

2) `moduleResolution: node16` vs `bundler`:
```json
{
  "compilerOptions": { "moduleResolution": "node16" }
}
```
Prueba imports con extensión `.js` en ESM.
