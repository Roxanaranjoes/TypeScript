Solución — 02 Instalación

- Script `typecheck` en `package.json`:
```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```

- `hello.ts`:
```ts
const msg: string = 'Hola desde TS';
console.log(msg);
```

- Ejecutar:
```
pnpm dlx tsx hello.ts
```
