Objetivo

Diferenciar `unknown`, `any`, `never` y `void`, y cuándo usarlos con seguridad.

Prerequisitos

- Tipos básicos.

Diagrama ASCII

unknown -> requiere refinamiento
any -> sin chequeo
never -> imposible/no retorna
void -> no retorna valor útil

Conceptos clave

- `unknown` más seguro que `any` (obliga a chequear).
- `never` para funciones que lanzan o bucles infinitos.
- `void` para funciones sin retorno significativo.

Paso a paso

1) Recibe `unknown` y refine por tipo.
2) Evita `any` salvo migraciones puntuales.
3) Usa `never` en `asserts`.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/05-unknown-any-never-void/index.ts`

Errores comunes

- Propagar `any` por el sistema.

Tips

- Prefiere `unknown` + guards.

Ejercicios

1) Escribe `isNumber(x: unknown): x is number`.
2) Escribe `assertIsString(x: unknown): asserts x is string`.

Soluciones

`01-fundamentals/soluciones/05-unknown-any-never-void/solucion.md`

Quiz

1) ¿`unknown` obliga a chequear? (Sí)
2) ¿`any` omite comprobaciones? (Sí)
3) ¿`never` es retornable? (No)
4) ¿`void` permite `return;`? (Sí)
5) ¿Los guards refinan `unknown`? (Sí)

Referencias

- Handbook: Unknown, Any, Never
