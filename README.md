# TypeScript Mastery (ES)

Repositorio educativo, ultra-explicativo, para aprender TypeScript desde cero (devs de JS) hasta nivel avanzado (patrones y librerías). Todo es práctico, sin “saltos mágicos”, con ejemplos ejecutables y guías paso a paso.

## Requisitos

- Node 20 LTS (o 18+)
- pnpm 9 (vía Corepack)
- TypeScript 5.x

## Instalación rápida

1) Habilita Corepack y usa la versión fijada en `package.json`:
```
corepack enable
```
2) Instala dependencias en la raíz:
```
pnpm install
```
3) Verifica el tipado:
```
pnpm typecheck
```
4) Ejecuta ejemplos en watch:
```
pnpm dev
```

Nota: Algunas carpetas bajo `projects/*` tienen `package.json` propio. En cada una, ejecuta `pnpm install` antes de probar.

## Scripts principales

- `pnpm dev`: ejecuta ejemplos en watch (tsx)
- `pnpm build`: compila `src` con `tsup` (si aplica)
- `pnpm typecheck`: corre `tsc` sin emitir
- `pnpm lint`: ESLint
- `pnpm fmt` / `pnpm fmt:write`: Prettier check/escritura
- `pnpm test` / `pnpm test:watch`: Vitest
- `pnpm test:types`: tsd (tests de tipos)

## Estructura

- `00-setup`
- `01-fundamentals`
- `02-functions-this`
- `03-objects-classes`
- `04-generics-advanced-types`
- `05-modules-build`
- `06-typing-libs`
- `07-errors-safety`
- `08-testing`
- `09-tooling-dx`
- `10-performance-limits`
- `11-advanced-patterns`
- `projects/` (p. ej. `01-cli-todo`, `02-rest-api`, `03-react-widget`, `04-ts-lib`)
- `examples/`, `snippets/`, `challenges/`, `checklists/`, `docs/`

## Roadmap de aprendizaje

1) 00-setup: entorno, tsconfig, tooling
2) 01-fundamentals: tipos, unions, narrowing
3) 02-functions-this: funciones, overloads, this, asserts
4) 03-objects-classes: interfaces, clases, mixins
5) 04-generics-advanced-types: genéricos, tipos condicionales, mapped, template
6) 05-modules-build: ESM/CJS, build, `exports`, d.ts
7) 06-typing-libs: Node, Web, Express, React, fetch
8) 07-errors-safety: Result/Either, guards, exhaustividad
9) 08-testing: Vitest, tests de tipos
10) 09-tooling-dx: ESLint, Prettier, migraciones
11) 10-performance-limits: coste de tipos, flags de rendimiento
12) 11-advanced-patterns: branding, fluent, DI, factories

## Tabla de contenidos (parcial)

- 00-setup
  - 01 ¿Qué es TS? y diferencias con JS → `00-setup/01-que-es-ts.md`
  - 02 Instalar Node y pnpm, TS local → `00-setup/02-instalacion.md`
  - 03 `tsc --init` y tsconfig → `00-setup/03-tsconfig.md`
  - 04 Ejecutar TS (tsx/ts-node/tsup) → `00-setup/04-ejecutar-ts.md`
  - 05 ESLint + Prettier + EditorConfig → `00-setup/05-lint-prettier.md`
  - 06 Env vars y tipos para `process.env` → `00-setup/06-env-types.md`

- 01-fundamentals
  - 01 Tipos primitivos; type vs interface → `01-fundamentals/01-primitivos-type-interface.md`
  - 02 Arrays, tuplas, readonly → `01-fundamentals/02-arrays-tuplas.md`
  - 03 Enums vs unions literales → `01-fundamentals/03-enums-vs-unions.md`
  - 04 Literales, `as const`, `satisfies` → `01-fundamentals/04-literals-asconst-satisfies.md`
  - 05 `unknown` vs `any` vs `never`; `void` → `01-fundamentals/05-unknown-any-never-void.md`
  - 06 Narrowing (typeof, in, instanceof, truthiness) → `01-fundamentals/06-narrowing.md`
  - 07 Optional chaining y nullish → `01-fundamentals/07-optional-nullish.md`
  - 08 Index signatures y diccionarios → `01-fundamentals/08-index-signatures.md`

…y más módulos en el repositorio.

## CI/CD

- GitHub Actions corre typecheck, lint, tests unitarios y de tipos en `ubuntu-latest`.
- Usa pnpm 9. El cache de pnpm se habilita solo si existe `pnpm-lock.yaml`.

## Contribuir

- Lee `CONTRIBUTING.md` (estilo, convenciones y cómo ejecutar ejemplos/tests).
- Issues y PRs bienvenidos. Priorizamos claridad, ejemplos ejecutables y comentarios que expliquen el “por qué”.

## Licencia

MIT — ver `LICENSE`.

