export function isEmail(x: string): boolean {
  // Validador muy básico para ejemplo didáctico
  return /.+@.+\..+/.test(x);
}
