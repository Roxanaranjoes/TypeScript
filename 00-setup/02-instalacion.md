Objetivo

Instalar Node, pnpm y TypeScript localmente en el proyecto.

Prerequisitos

- Acceso a terminal. Conocer comandos básicos.

Diagrama ASCII

Sistema -> Node -> pnpm -> Proyecto (TS local)

Conceptos clave

- TS como dependencia de desarrollo.
- `pnpm` gestiona workspace y lockfiles eficientes.

Paso a paso

1) Instalar pnpm global:
```
npm i -g pnpm
```
2) Inicializar proyecto y añadir TS:
```
pnpm init -y
pnpm add -D typescript
```
3) Ver versión:
```
pnpm tsx --version || pnpm tsc --version
```

Ejemplo mínimo ejecutable

Ver `examples/00-setup/02-instalacion/index.ts`.

Errores comunes

- `tsc` no encontrado: instala `typescript` como devDependency.
- Node desactualizado: actualiza a 18+ o 20+.

Tips

- Usa `corepack enable` para facilitar `pnpm` en entornos CI.

Ejercicios

1) Crea `hello.ts` y compílalo con `pnpm dlx tsx hello.ts`.
2) Añade script `typecheck` con `tsc --noEmit`.

Soluciones

Ver `00-setup/soluciones/02-instalacion/solucion.md`.

Quiz

1) ¿TS debe instalarse globalmente? (No es necesario)
2) ¿`pnpm add -D typescript` instala TS local? (Sí)
3) ¿`pnpm` sustituye a Node? (No)
4) ¿`tsx` ejecuta TS sin compilar manualmente? (Sí)
5) ¿Necesitas Node 18+? (Sí)

Referencias

- pnpm.io
- typescriptlang.org
