import { PATH_DB } from '../constants/constants.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading contacts from ${PATH_DB}:`, error);
  }
};
