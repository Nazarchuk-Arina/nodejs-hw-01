import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

export const getAllContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    throw error;
  }
};

(async () => {
  console.log(await getAllContacts());
})();
