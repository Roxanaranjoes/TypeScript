import { afterEach, beforeEach, expect, test } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { add, readDB, writeDB } from '../src/index.js';

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'todos.json');

beforeEach(() => {
  fs.rmSync(DB_DIR, { recursive: true, force: true });
});

afterEach(() => {
  fs.rmSync(DB_DIR, { recursive: true, force: true });
});

test('add crea un todo', () => {
  writeDB([]);
  add('probar');
  const todos = readDB();
  expect(todos.length).toBe(1);
  const first = todos[0]!;
  expect(first.title).toBe('probar');
});
