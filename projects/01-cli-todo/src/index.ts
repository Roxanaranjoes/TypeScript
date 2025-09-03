import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

const TodoSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  done: z.boolean().default(false),
});
type Todo = z.infer<typeof TodoSchema>;

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'todos.json');

function readDB(): Todo[] {
  if (!fs.existsSync(DB_FILE)) return [];
  const raw = fs.readFileSync(DB_FILE, 'utf8');
  const data = JSON.parse(raw);
  return z.array(TodoSchema).parse(data);
}

function writeDB(todos: Todo[]) {
  fs.mkdirSync(DB_DIR, { recursive: true });
  fs.writeFileSync(DB_FILE, JSON.stringify(todos, null, 2));
}

function nextId(todos: Todo[]) {
  return (Math.max(0, ...todos.map(t => t.id)) || 0) + 1;
}

function add(title: string) {
  const todos = readDB();
  const todo: Todo = { id: nextId(todos), title, done: false };
  writeDB([...todos, todo]);
  console.log('Añadido:', todo);
}

function list() {
  const todos = readDB();
  if (todos.length === 0) return console.log('Sin tareas');
  for (const t of todos) {
    console.log(`${t.id}. [${t.done ? 'x' : ' '}] ${t.title}`);
  }
}

function toggle(id: number) {
  const todos = readDB();
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return console.error('No existe el id', id);
  todos[idx].done = !todos[idx].done;
  writeDB(todos);
  console.log('Actualizado:', todos[idx]);
}

function remove_(id: number) {
  const todos = readDB();
  const after = todos.filter(t => t.id !== id);
  writeDB(after);
  console.log('Eliminado id', id);
}

function main(argv: string[]) {
  const [cmd, ...rest] = argv.slice(2);
  switch (cmd) {
    case 'add':
      add(rest.join(' ').trim());
      break;
    case 'list':
      list();
      break;
    case 'toggle':
      toggle(Number(rest[0]));
      break;
    case 'remove':
      remove_(Number(rest[0]));
      break;
    default:
      console.log('Uso: add <titulo> | list | toggle <id> | remove <id>');
  }
}

if (require.main === module) {
  // Ejecutado directamente
  main(process.argv);
}

export { add, list, toggle, remove_, readDB, writeDB };
