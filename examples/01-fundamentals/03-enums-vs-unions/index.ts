// Enum (runtime)
enum Estado { Activo = 'Activo', Inactivo = 'Inactivo' }
console.log('Enum Estado:', Estado.Activo);

// Union literal (solo tipo)
type EstadoL = 'Activo' | 'Inactivo';

function msg(e: EstadoL) {
  switch (e) {
    case 'Activo':
      return 'Está activo';
    case 'Inactivo':
      return 'Está inactivo';
  }
}

console.log(msg('Activo'));
