import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z
    .string()
    .transform(v => Number(v))
    .pipe(z.number().int().positive())
    .optional()
    .default(3000),
});

const env = EnvSchema.parse(process.env);
console.log('Config tipada:', env);
