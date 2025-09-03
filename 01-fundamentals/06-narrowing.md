Objetivo

Refinar tipos con `typeof`, `in`, `instanceof`, truthiness y control flow analysis.

Prerequisitos

- Unions y guards básicos.

Diagrama ASCII

union -> checks -> ramas más estrechas -> exhaustividad

Conceptos clave

- Narrowing guía al compilador hacia tipos concretos.
- Control flow analysis recuerda comprobaciones previas.

Paso a paso

1) Usa `typeof` para primitivos.
2) Usa `in` para discriminar por propiedad.
3) Usa `instanceof` para clases/errores.

Ejemplo mínimo ejecutable

`examples/01-fundamentals/06-narrowing/index.ts`

Errores comunes

- Olvidar `return` en ramas y perder el narrowing.

Tips

- Usa discriminated unions con `kind` o `type`.

Ejercicios

1) Discrimina `Circle | Square` por `kind`.
2) Maneja `Error | string` con `instanceof`.

Soluciones

`01-fundamentals/soluciones/06-narrowing/solucion.md`

Quiz

1) ¿`typeof` funciona con objetos personalizados? (No)
2) ¿`in` comprueba propiedades? (Sí)
3) ¿`instanceof` sirve con clases? (Sí)
4) ¿El flujo conserva checks? (Sí)
5) ¿Discriminated unions ayudan al narrowing? (Sí)

Referencias

- Handbook: Narrowing
