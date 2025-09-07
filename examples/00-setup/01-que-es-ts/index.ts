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

// Para ver un error de tipos en el editor/tsc,
// prueba a llamar con un número:
// console.log(saluda(123));

export {} // aisla el archivo como módulo
