import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`${number} contacts were successfully generated and added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
