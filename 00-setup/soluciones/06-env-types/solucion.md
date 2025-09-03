Solución — 06 Env Types

```ts
import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z
    .string()
    .transform(v => Number(v))
    .pipe(z.number().int().positive())
    .default('3000' as unknown as number as any),
});

export const env = EnvSchema.parse(process.env);
```
