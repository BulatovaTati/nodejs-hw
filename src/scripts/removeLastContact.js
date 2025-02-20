import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) return console.error('No contacts');

  const removedContact = contacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

  return removedContact;
};

removeLastContact();
