Guía de depuración TS

Errores típicos

- TS2304: Nombre no encontrado → importar o declarar tipo.
- TS7053: Índice no seguro → usa tipos de índice o `Record` y maneja `undefined`.
- TS2322: Tipo no asignable → revisa la compatibilidad o usa narrowing.

Estrategia

- Lee el mensaje completo y la traza de tipos.
- Reduce el ejemplo al mínimo reproducible.
- Añade anotaciones explícitas para ver el tipo real.
- Usa `as const`, `satisfies` y generics conscientemente.
