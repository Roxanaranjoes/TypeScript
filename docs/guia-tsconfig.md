Guía de tsconfig (banderas clave)

- target: versión JS emitida (ES2022 recomendado).
- module: sistema de módulos (ESNext para ESM).
- moduleResolution: cómo resolver imports (bundler/node16).
- strict: activa modo estricto (obligatorio en este repo).
- noUncheckedIndexedAccess: accesos por índice devuelven `T | undefined`.
- exactOptionalPropertyTypes: opcionales estrictos.
- types: ambient types a incluir (node, vitest/globals).
- baseUrl/paths: aliases de import.
- rootDir/outDir: controla entradas/salidas.
