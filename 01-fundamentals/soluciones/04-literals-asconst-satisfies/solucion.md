Solución — 04 Literales, as const, satisfies

```ts
const routes = {
  home: '/',
  about: '/about',
} as const;
type RouteKey = keyof typeof routes; // 'home' | 'about'

type RoutesShape = Record<string, string>;
const r2 = {
  home: '/',
  about: '/about',
} satisfies RoutesShape;
```
