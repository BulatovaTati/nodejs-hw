import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContacts = createFakeContact();
    await writeContacts(newContacts);
    return newContacts;
  } catch (error) {
    console.log('error: ', error.message);
  }
};

addOneContact();
