// Ejemplo mínimo: TypeScript es JS con tipos opcionales

type Usuario = {
  id: number;
  nombre: string;
};

function saluda(nombre: string): string {
  return `Hola, ${nombre}!`;
}

const u: Usuario = { id: 1, nombre: 'Ada' };
console.log(saluda(u.nombre));

// Descomenta para ver un error de tipos en el editor/tsc:
// @ts-expect-error
// console.log(saluda(123));
