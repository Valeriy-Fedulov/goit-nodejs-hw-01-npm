import { constants } from "buffer";
import fs from "fs/promises";
import path from "path";
import { v4 } from "uuid";

const contactsPath = path.join("./db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async (contactId) => {
  const contacts = listContacts();
  const idx = constants.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const removeContById = constants.splice(idx, 1);
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

export default { listContacts, getContactById, removeContact, addContact };
