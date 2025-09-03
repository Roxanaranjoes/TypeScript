// Demostración de `noUncheckedIndexedAccess`

const mapa: Record<string, number> = {};
const valor = mapa['x'];
// valor es number | undefined con noUncheckedIndexedAccess
console.log('Valor puede ser undefined:', valor);
