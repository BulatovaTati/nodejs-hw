import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  const contacts = await readContacts();

  if (Array.isArray(updatedContacts)) {
    contacts.push(...updatedContacts);
  } else {
    contacts.push(updatedContacts);
  }

  await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));

  return updatedContacts;
};
