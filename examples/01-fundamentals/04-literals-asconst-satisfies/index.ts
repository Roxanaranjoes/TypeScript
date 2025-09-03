const cfg = {
  apiBase: 'https://api.example.com',
  retry: 3,
} as const;

type Keys = keyof typeof cfg;
console.log('Keys literales:', Object.keys(cfg), '->', (null as unknown as Keys));

type CfgShape = { [k: string]: string | number };
const cfg2 = {
  apiBase: 'x',
  retry: 1,
} satisfies CfgShape;

console.log('cfg2', cfg2);
