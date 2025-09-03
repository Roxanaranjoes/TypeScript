import { expectTypeOf, test } from 'vitest';

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

test('MyPick', () => {
  type A = { x: number; y: string; z: boolean };
  type B = MyPick<A, 'x' | 'z'>;
  expectTypeOf<B>().toEqualTypeOf<{ x: number; z: boolean }>();
});
