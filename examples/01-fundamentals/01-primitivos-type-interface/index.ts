// Primitivos
const s: string = 'hola';
const n: number = 42;
const b: boolean = true;
const bi: bigint = 10n;
const sy: symbol = Symbol('id');

type Persona = { nombre: string };
interface Usuario { id: number }

interface Usuario { activo?: boolean }

type UsuarioPersona = Usuario & Persona;

const up: UsuarioPersona = { id: 1, nombre: 'Ada' };
console.log('UsuarioPersona:', up);

export {} // aisla el archivo como módulo
