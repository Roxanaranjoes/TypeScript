Solución — 03 Enums vs Unions

```ts
type Rol = 'admin' | 'user' | 'guest';

function describeRol(rol: Rol): string {
  switch (rol) {
    case 'admin':
      return 'Acceso total';
    case 'user':
      return 'Acceso estándar';
    case 'guest':
      return 'Acceso limitado';
    default: {
      const _exhaustive: never = rol;
      return _exhaustive;
    }
  }
}
```
