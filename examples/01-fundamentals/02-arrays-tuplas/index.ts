const nums: number[] = [1, 2, 3];
console.log(nums.map(n => n * 2));

const tupla: [number, string] = [200, 'OK'];
console.log(tupla[0], tupla[1]);

const ro: readonly number[] = [1, 2];
// ro.push(3) // Error en TS
console.log(ro);
