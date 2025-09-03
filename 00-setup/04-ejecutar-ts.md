Objetivo

Ejecutar código TypeScript con diferentes herramientas: `tsx`, `ts-node`, `tsup` (build).

Prerequisitos

- TS instalado localmente.

Diagrama ASCII

TS fuente -> (tsx|ts-node) -> ejecución directa
TS fuente -> tsup -> JS emit -> node

Conceptos clave

- `tsx`: ejecuta TS/ESM rápido, ideal para DX.
- `ts-node`: similar, más tradicional.
- `tsup`: bundler (esbuild) para generar JS + dts.

Paso a paso

1) Ejecutar con tsx:
```
pnpm dlx tsx examples/00-setup/04-ejecutar-ts/index.ts
```
2) Ejecutar con ts-node:
```
pnpm dlx ts-node examples/00-setup/04-ejecutar-ts/index.ts
```
3) Build con tsup (si tienes `src/`):
```
pnpm tsup src --dts --clean
```

Ejemplo mínimo ejecutable

Ver `examples/00-setup/04-ejecutar-ts/index.ts`.

Errores comunes

- Mezclar CJS/ESM: define `"type": "module"` o usa extensiones.
- Falta de tipos de Node: añade `@types/node` y `types` en tsconfig.

Tips

- Prefiere `tsx` para scripts y ejemplos.

Ejercicios

1) Crea `src/suma.ts` y haz build con `tsup`.
2) Ejecuta resultante con `node`.

Soluciones

Ver `00-setup/soluciones/04-ejecutar-ts/solucion.md`.

Quiz

1) ¿`tsx` compila y ejecuta en memoria? (Sí)
2) ¿`tsup` genera declaraciones `.d.ts` con `--dts`? (Sí)
3) ¿`ts-node` necesita tsconfig? (Recomendado)
4) ¿CJS y ESM se pueden mezclar sin cuidado? (No)
5) ¿`tsup` usa esbuild? (Sí)

Referencias

- esbuild, tsx, ts-node, tsup docs
