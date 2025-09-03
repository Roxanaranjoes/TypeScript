Objetivo

Configurar ESLint + Prettier + EditorConfig para un DX consistente.

Prerequisitos

- Proyecto TS inicializado.

Diagrama ASCII

Código TS -> ESLint (reglas) -> Prettier (formato) -> EditorConfig (consistencia)

Conceptos clave

- ESLint para calidad; Prettier para estilo.
- Evitar conflictos con `eslint-config-prettier`.

Paso a paso

1) Instalar dependencias (ya listadas en `package.json`).
2) Ver `.eslintrc.cjs` y `.prettierrc` del repo.
3) Ejecutar:
```
pnpm lint
pnpm fmt
```

Ejemplo mínimo ejecutable

Linter sobre `examples/01-fundamentals/*`.

Errores comunes

- Reglas de ESLint chocando con Prettier → usa `eslint-config-prettier`.

Tips

- Activa `@typescript-eslint/consistent-type-imports`.

Ejercicios

1) Introduce un import desordenado y deja que ESLint lo reporte.
2) Rompe el ancho de línea y formatea con Prettier.

Soluciones

Ver `00-setup/soluciones/05-lint-prettier/solucion.md`.

Quiz

1) ¿Prettier reemplaza a ESLint? (No)
2) ¿`eslint-config-prettier` desactiva reglas conflictivas? (Sí)
3) ¿EditorConfig aplica en todos los editores? (Muchos, con plugin)
4) ¿`pnpm fmt` modifica archivos? (No, solo check)
5) ¿`pnpm fmt:write` escribe cambios? (Sí)

Referencias

- ESLint, Prettier docs
