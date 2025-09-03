Objetivo

Entender qué es TypeScript, sus diferencias clave con JavaScript, y cuándo conviene usarlo. Veremos ventajas, costos y un ejemplo mínimo ejecutable.

Prerequisitos

- Conocer JS básico (variables, funciones, objetos).
- Tener Node 18+ y pnpm instalados.

Diagrama ASCII

JS (dinámico) --> corre en Node/Browser
TS (superset) --compila--> JS (dinámico)

Conceptos clave

- TypeScript: superset tipado de JavaScript.
- Tipado estático opcional, ayuda del editor, DX superior.
- Compila a JS estándar; no corre TS directamente en el runtime.
- Costos: configuración inicial, curva de aprendizaje, velocidad de build.

Paso a paso

1) Crear archivo TS y ejecutarlo con `tsx`:
```
pnpm dlx tsx examples/00-setup/01-que-es-ts/index.ts
```
2) Observa inferencias y errores si cambiamos tipos.

Ejemplo mínimo ejecutable

Ver `examples/00-setup/01-que-es-ts/index.ts`.

Errores comunes

- Intentar ejecutar TS sin transpilar: usa `tsx`, `ts-node` o `tsc && node`.
- Confundir "tipos" con runtime: los tipos se borran al compilar.

Tips

- Aprovecha el autocompletado y JSDoc/TSDoc para DX excelente.
- Empieza con `strict: true` para mejores garantías.

Ejercicios

1) Añade una función `saluda(nombre: string): string` y úsala.
2) Crea un objeto `Usuario` con `id: number`, `nombre: string`.
3) Introduce un error de tipo a propósito y lee el mensaje.

Soluciones

Ver `00-setup/soluciones/01-que-es-ts/solucion.md`.

Quiz

1) ¿TS corre directamente en Node? (No)
2) ¿TS es un superset de JS? (Sí)
3) ¿Los tipos existen en runtime? (No)
4) ¿`strict: true` mejora la seguridad? (Sí)
5) ¿Compilar TS produce JS estándar? (Sí)

Referencias

- TypeScript Handbook (oficial)
- TypeScript for JS Programmers (oficial)
