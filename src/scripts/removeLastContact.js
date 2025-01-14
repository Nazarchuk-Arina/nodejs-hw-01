import { writeFile, readFile } from 'fs/promises';
import { PATH_DB } from '../constants/constants.js';

export const removeLastContact = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    contacts.pop();
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Contact was successfully removed.`);
  } catch (error) {
    console.error('Error removing contact:', error);
    throw error;
  }
};

removeLastContact();
