Objetivo

Conocer los tipos primitivos de TS/JS y entender diferencias entre `type` e `interface`.

Prerequisitos

- Sintaxis básica de JS.

Diagrama ASCII

Primitivos: string | number | boolean | null | undefined | symbol | bigint

Conceptos clave

- `type`: alias de tipo (composición con unions, intersections).
- `interface`: forma de objetos, puede extender y ser mergeada.
- En objetos, `type` e `interface` suelen ser intercambiables con matices.

Paso a paso

1) Define primitivos y observa inferencia.
2) Define `type Persona` e `interface Usuario`.
3) Extiende con `interface` y combina con `type`.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/01-primitivos-type-interface/index.ts`

Errores comunes

- Intentar extender un `type` con `extends` (usa intersección `&`).

Tips

- Prefiere `type` para unions; `interface` para APIs públicas extensibles.

Ejercicios

1) Crea `type Punto = { x: number; y: number }`.
2) Crea `interface ConNombre { nombre: string }` y extiéndela.
3) Combina `Punto` & `ConNombre`.

Soluciones

`01-fundamentals/soluciones/01-primitivos-type-interface/solucion.md`

Quiz

1) ¿`type` puede ser union? (Sí)
2) ¿`interface` hace merging? (Sí)
3) ¿`bigint` es primitivo? (Sí)
4) ¿`null` y `undefined` son diferentes? (Sí)
5) ¿`type` se reabre como `interface`? (No)

Referencias

- Handbook: Types & Interfaces
