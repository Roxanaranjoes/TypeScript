Solución — 04 Ejecutar TS

1) `src/suma.ts`:
```ts
export const suma = (a: number, b: number) => a + b;
```
2) Build:
```
pnpm tsup src --dts --clean
```
3) Ejecuta el emit:
```
node dist/suma.js
```
