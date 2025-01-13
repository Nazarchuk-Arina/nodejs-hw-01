import { writeFile, readFile } from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import path from 'node:path';

export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
export const addOneContact = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Contact was successfully added.`, newContact);
    return newContact;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

addOneContact();
