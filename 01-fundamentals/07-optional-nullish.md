Objetivo

Usar optional chaining (`?.`) y nullish coalescing (`??`) para tratar `null`/`undefined` con seguridad.

Prerequisitos

- Conocer `null` y `undefined`.

Diagrama ASCII

obj?.prop?.subprop  |  valor ?? default

Conceptos clave

- `?.` evita errores de acceso en cadenas opcionales.
- `??` solo usa default si es `null` o `undefined` (no para 0/""/false).

Paso a paso

1) Accede a propiedades opcionales con `?.`.
2) Usa `??` para defaults razonables.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/07-optional-nullish/index.ts`

Errores comunes

- Usar `||` en vez de `??` y romper falsy válidos.

Tips

- Combina con `??=` para asignaciones.

Ejercicios

1) Lee `user.profile?.email ?? 'sin-email'`.
2) Asigna `count ??= 0`.

Soluciones

`01-fundamentals/soluciones/07-optional-nullish/solucion.md`

Quiz

1) ¿`??` trata 0 como nullish? (No)
2) ¿`?.` evita lanzar al acceder? (Sí)
3) ¿`?.()` existe para funciones opcionales? (Sí)
4) ¿`?.[]` existe para índices? (Sí)
5) ¿Se debe abusar de `?.`? (No)

Referencias

- Optional Chaining / Nullish Coalescing (MDN)
