const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const jsonParseData = await JSON.parse(data);

    console.table(jsonParseData);
  } catch (error) {
    console.error(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const jsonParseData = await JSON.parse(data).find(
      (item) => item.id === contactId
    );

    console.table(jsonParseData);
  } catch (error) {
    console.error(error.message);
  }
}
async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const jsonParseData = await JSON.parse(data).filter(
      ({ id }) => id !== contactId
    );
    console.table(jsonParseData);
    await fs.writeFile(contactsPath, JSON.stringify(jsonParseData));
  } catch (error) {
    console.error(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const jsonParseData = await JSON.parse(data);
    const newUser = {
      id: String(jsonParseData.length + 1),
      name,
      email,
      phone,
    };
    jsonParseData.push(newUser);
    console.table(jsonParseData);
    await fs.writeFile(contactsPath, JSON.stringify(jsonParseData), "utf8");
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  addContact,
  getContactById,
  listContacts,
  removeContact,
};
