Reto: MyPick

Implementa `MyPick<T, K>` similar a `Pick`.

```ts
type A = { x: number; y: string; z: boolean };
type B = MyPick<A, 'x' | 'z'>; // { x: number; z: boolean }
```
