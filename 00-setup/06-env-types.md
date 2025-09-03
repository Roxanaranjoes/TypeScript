Objetivo

Manejar variables de entorno con tipos seguros y validación en runtime.

Prerequisitos

- Conocer `process.env`.

Diagrama ASCII

process.env -> Zod schema -> Config tipada

Conceptos clave

- `process.env` es `Record<string, string | undefined>`.
- Validar con Zod y exponer un objeto tipado.

Paso a paso

1) Crear esquema Zod y parsear env.
2) Exportar `config` con tipos estrictos.

Ejemplo mínimo ejecutable

Ver `examples/00-setup/06-env-types/index.ts`.

Errores comunes

- Asumir que `process.env.X` siempre existe → valida o lanza error.

Tips

- Usa `as const` para banderas y literales.

Ejercicios

1) Añade `PORT` numérico opcional con default.
2) Añade `NODE_ENV` como union literal.

Soluciones

Ver `00-setup/soluciones/06-env-types/solucion.md`.

Quiz

1) ¿`process.env` tiene strings o undefined? (Ambos)
2) ¿Zod valida en runtime? (Sí)
3) ¿El tipado evita `undefined` tras parseo? (Sí)
4) ¿Se debe acceder a `process.env` directamente por todo el código? (No)
5) ¿Puedes dar defaults con Zod? (Sí)

Referencias

- Zod docs, Node.js process.env
