Guía de contribución

Requisitos

- Node 18+ o 20+, pnpm
- TypeScript >= 5.x
- ESLint, Prettier

Flujo de trabajo

1) Crea una rama desde `main`.
2) Instala dependencias: `pnpm i`.
3) Añade/edita lecciones siguiendo el estilo didáctico (12 secciones).
4) Agrega ejemplo runnable bajo `examples/<modulo>/<leccion>/`.
5) Corre `pnpm typecheck`, `pnpm lint`, `pnpm test` y `pnpm test:types`.
6) Abre un PR con descripción clara y checklist de lo agregado.

Estilo

- Español claro y directo.
- Comentarios explicando motivación, trade-offs, y cuándo usar una técnica.
- Mantén los ejemplos pequeños y componibles.

Commits

- Usa mensajes descriptivos. Ej: `feat(fundamentals): añade lección de unions literales`.
