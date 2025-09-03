Objetivo

Comparar `enum` con uniones literales para modelar estados y opciones.

Prerequisitos

- Literales de string/number en TS.

Diagrama ASCII

enum Estado { Activo, Inactivo }
'Activo' | 'Inactivo'

Conceptos clave

- Enums añaden objeto/runtime; unions son puramente de tipo (con `as const`).
- Unions + `as const` suelen ser más ligeros y tree-shakeables.

Paso a paso

1) Define un `enum` y úsalo.
2) Define una union literal y compárala.
3) Asegura exhaustividad con `never`.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/03-enums-vs-unions/index.ts`

Errores comunes

- Usar enums en librerías ESM puede complicar bundling.

Tips

- Prefiere unions + objetos `as const` para DX y tamaño.

Ejercicios

1) Crea `type Rol = 'admin' | 'user' | 'guest'`.
2) Escribe función que acepte `Rol` y case `switch` exhaustivo.

Soluciones

`01-fundamentals/soluciones/03-enums-vs-unions/solucion.md`

Quiz

1) ¿Enum existe en runtime? (Sí)
2) ¿Union existe en runtime? (No)
3) ¿Se puede hacer exhaustividad con unions? (Sí)
4) ¿Enums afectan tree-shaking? (Pueden)
5) ¿Unions requieren `as const` para claves? (Útil para derivar tipos)

Referencias

- Handbook: Enums; Literal Types
