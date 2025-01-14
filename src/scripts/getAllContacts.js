import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

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
