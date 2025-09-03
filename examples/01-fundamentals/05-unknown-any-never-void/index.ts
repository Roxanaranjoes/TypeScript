function handle(x: unknown) {
  if (typeof x === 'string') {
    console.log('len', x.length);
  } else if (typeof x === 'number') {
    console.log('doble', x * 2);
  } else {
    console.log('otro tipo');
  }
}

function fail(msg: string): never {
  throw new Error(msg);
}

function log(msg: string): void {
  console.log(msg);
}

handle('hola');
log('ok');
// fail('error');
