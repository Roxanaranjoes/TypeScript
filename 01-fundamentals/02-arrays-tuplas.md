Objetivo

Aprender arrays tipados, tuplas y `readonly` para inmutabilidad superficial.

Prerequisitos

- Tipos básicos en TS.

Diagrama ASCII

Array<T>  |  [T, U] (tupla)  |  readonly T[]

Conceptos clave

- `T[]` o `Array<T>` para listas homogéneas.
- Tuplas: longitud y posiciones fijas, útiles para pares/retornos múltiples.
- `readonly` evita mutaciones (push/splice) en tiempo de compilación.

Paso a paso

1) Declara `number[]` y usa métodos seguros.
2) Crea tupla `[number, string]`.
3) Usa `readonly` en arrays y tuplas.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/02-arrays-tuplas/index.ts`

Errores comunes

- Tratar tupla como array libre y acceder fuera de rango.

Tips

- `as const` fija literal y hace tupla inmutable.

Ejercicios

1) Declara `readonly [number, number]`.
2) Crea `ReadonlyArray<string>`.
3) Convierte `['a','b'] as const` y obtén su tipo.

Soluciones

`01-fundamentals/soluciones/02-arrays-tuplas/solucion.md`

Quiz

1) ¿Tuplas fijan longitud? (Sí)
2) ¿`readonly` evita `push`? (Sí)
3) ¿`Array<T>` equivale a `T[]`? (Sí)
4) ¿`as const` ayuda a inferir literales? (Sí)
5) ¿Se puede ampliar una tupla con spread? (Sí, con cuidado)

Referencias

- Handbook: Arrays & Tuples
