type Perfil = { email?: string };
type User = { profile?: Perfil };

const u: User = {};
const email = u.profile?.email ?? 'sin-email';
console.log('email:', email);

export {} // aisla el archivo como módulo
