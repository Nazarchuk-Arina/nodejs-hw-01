import path from 'node:path';
import fs from 'fs/promises';

export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
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
