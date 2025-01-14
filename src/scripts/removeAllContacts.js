import fs from 'fs/promises';
import { PATH_DB } from '../constants/constants.js';

export const removeAllContacts = async () => {
  try {
    const emptyArray = JSON.stringify([], null, 2);
    await fs.writeFile(PATH_DB, emptyArray, 'utf-8');
    console.log(`Contacts was successfully removed.`);
  } catch (error) {
    console.error('Error removing contacts:', error.message);
    throw error;
  }
};

removeAllContacts();
