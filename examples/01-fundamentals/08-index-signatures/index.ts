const scores: Record<string, number> = {};
scores['ada'] = 100;

const maybe = scores['linus'];
console.log('linus?', maybe); // number | undefined con noUncheckedIndexedAccess
