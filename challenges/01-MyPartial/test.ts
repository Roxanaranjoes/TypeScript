import { expect, test, expectTypeOf } from 'vitest';

type MyPartial<T> = { [K in keyof T]?: T[K] };

test('MyPartial', () => {
  type A = { x: number; y: string };
  type B = MyPartial<A>;
  expectTypeOf<B>().toEqualTypeOf<{ x?: number; y?: string }>();
  expect(true).toBe(true);
});
