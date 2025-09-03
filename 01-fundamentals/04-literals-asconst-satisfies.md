Objetivo

Usar tipos literales, `as const` y el operador `satisfies` para precisión y validación estática.

Prerequisitos

- Conocer unions y objetos.

Diagrama ASCII

objeto as const -> readonly, literales
valor satisfies T -> verifica compatibilidad sin perder literales

Conceptos clave

- `as const` convierte propiedades en readonly y literales estrechos.
- `satisfies` verifica que un valor cumple un tipo sin ampliar su tipo inferido.

Paso a paso

1) Crea un objeto config con `as const`.
2) Usa `satisfies` para validar estructura.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/04-literals-asconst-satisfies/index.ts`

Errores comunes

- Usar `as` para castear en lugar de `satisfies` y perder seguridad.

Tips

- `satisfies` es ideal para configs y mapas de handlers.

Ejercicios

1) Declara mapa de rutas `as const` y tipa sus claves.
2) Usa `satisfies` para asegurar forma.

Soluciones

`01-fundamentals/soluciones/04-literals-asconst-satisfies/solucion.md`

Quiz

1) ¿`as const` hace readonly? (Sí)
2) ¿`satisfies` castea? (No, verifica)
3) ¿Se conservan literales con `satisfies`? (Sí)
4) ¿Sirve para configs? (Sí)
5) ¿Reemplaza a `as` siempre? (No)

Referencias

- TS 4.9: `satisfies`
