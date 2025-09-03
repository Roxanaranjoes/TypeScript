// Ejemplos con vitest + expectTypeOf
import { expect, expectTypeOf, test } from 'vitest';

test('inferencias', () => {
  const tuple = ['a', 1] as const;
  expect(tuple[0]).toBe('a');
  expectTypeOf(tuple).toEqualTypeOf<readonly ['a', 1]>();
});
