import { PATH_DB } from '../constants/constants.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, jsonData, 'utf8');
    console.log('Contacts successfully updated');
  } catch (error) {
    console.error(`Error writing contacts to ${PATH_DB}:`, error);
  }
};
