import { StudentsCollection } from '../db/models/contacts.js';

export const getContacts = async (req, res) => {
  const students = await StudentsCollection.find();

  res.json(students);
};

export const getContactById = async (req, res) => {
  const { id } = req.params;

  const student = await StudentsCollection.findById(id);

  if (student === null) return res.status(404).send('Student not found');

  res.json(student);
};
