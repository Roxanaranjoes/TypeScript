type Circle = { kind: 'circle'; r: number };
type Square = { kind: 'square'; s: number };
type Shape = Circle | Square;

function area(x: Shape) {
  if (x.kind === 'circle') return Math.PI * x.r * x.r;
  return x.s * x.s;
}

console.log(area({ kind: 'circle', r: 2 }));
console.log(area({ kind: 'square', s: 3 }));
