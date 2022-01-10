import contactsOperations from "./contacts.js";

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts[0]);
      break;

    case "getContactById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "removeContact":
      const removeCont = await contactsOperations.removeContact(id);
      console.log(removeCont);
      break;

    case "addContact":
      const newContact = await contactsOperations.addContact(data);
      console.log(newContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "3" });

// const newData = {
//   name: "New Name",
//   email: "name@mail.com",
//   phone: "(123) 456-7890",
// };

// invokeAction({ action: "addContact", data: newData });
// invokeAction({ action: "removeContact", id: "5" });
