import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getContacts = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactQuery = ContactsCollection.find();
  const contactCount = await ContactsCollection.find()
    .merge(contactQuery)
    .countDocuments();

  const totalPages = Math.ceil(contactCount / perPage);

  if (page > totalPages) {
    return {
      status: 400,
      message: 'Invalid page number',
      data: null,
    };
  }

  const contacts = await contactQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(contactCount, perPage, page);

  return {
    contacts,
    ...paginationData,
  };
};

export const getContactById = async (contactId) => {
  return await ContactsCollection.findById(contactId);
};

export const createContact = async (payload) => {
  return await ContactsCollection.create(payload);
};

export const deleteContact = async (contactId) => {
  return await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });
};

export const updateContact = async (contactId, payload) => {
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
    },
  );
  return result.value;
};
