Objetivo

Crear y entender un `tsconfig.json` con banderas clave para DX y seguridad.

Prerequisitos

- TS instalado localmente.

Diagrama ASCII

tsconfig -> compilerOptions -> (target, lib, module, moduleResolution, strict, rootDir/outDir)

Conceptos clave

- `target`: versión JS emitida.
- `module`/`moduleResolution`: ESM/CJS y resolución de imports.
- `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`.
- `rootDir` y `outDir` definen entrada/salida.

Paso a paso

1) Inicializa:
```
pnpm dlx tsc --init --strict
```
2) Ajusta banderas (ver `tsconfig.base.json` del repo):
```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

Ejemplo mínimo ejecutable

Ver `examples/00-setup/03-tsconfig/index.ts` que rompe si cambias una opción.

Errores comunes

- `TS2304`: nombre no encontrado → falta import o `types` en tsconfig.
- `TS7053`: acceso por índice no seguro → activa `noUncheckedIndexedAccess` y tipa.

Tips

- Usa `types` para añadir ambient types: `node`, `vitest/globals`.
- En monorepos, considera project references.

Ejercicios

1) Activa `exactOptionalPropertyTypes` y observa cambios en opcionales.
2) Cambia `moduleResolution` a `node16` y prueba imports.

Soluciones

Ver `00-setup/soluciones/03-tsconfig/solucion.md`.

Quiz

1) ¿`strict` agrupa varias banderas? (Sí)
2) ¿`noUncheckedIndexedAccess` afecta a `obj[key]`? (Sí)
3) ¿`target` cambia el runtime? (No, cambia el emit)
4) ¿`moduleResolution` afecta cómo se resuelven imports? (Sí)
5) ¿`types` agrega ambient types? (Sí)

Referencias

- TSConfig Reference (oficial)
