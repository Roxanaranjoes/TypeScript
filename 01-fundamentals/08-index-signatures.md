Objetivo

Modelar diccionarios seguros usando index signatures y utilitarios estándar.

Prerequisitos

- Conocer `Record<K, V>` y tipos básicos.

Diagrama ASCII

{ [key: string]: T }  |  Record<K, V>

Conceptos clave

- Index signatures permiten claves dinámicas, pero conlleva `undefined`.
- `Record<K,V>` para mapas con conjunto de claves conocido.
- `noUncheckedIndexedAccess` hace accesos seguros.

Paso a paso

1) Define `Record<string, number>`.
2) Usa `keyof` para limitar claves.
3) Maneja `undefined` al leer.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/08-index-signatures/index.ts`

Errores comunes

- Asumir que `mapa[k]` existe.

Tips

- Encapsula lectura con helpers que lanzan si falta.

Ejercicios

1) Crea `type Moneda = 'USD' | 'EUR'` y `Record<Moneda, number>`.
2) Lee una clave inexistente y maneja `undefined`.

Soluciones

`01-fundamentals/soluciones/08-index-signatures/solucion.md`

Quiz

1) ¿`Record` es azúcar para mapas? (Sí)
2) ¿Acceder por índice puede dar `undefined`? (Sí)
3) ¿`noUncheckedIndexedAccess` afecta el tipo? (Sí)
4) ¿`keyof typeof` extrae claves? (Sí)
5) ¿`in` ayuda a chequear claves? (Sí)

Referencias

- Handbook: Index Signatures
