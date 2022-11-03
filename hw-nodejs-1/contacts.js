const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

const getUserList = async () => JSON.parse(await fs.readFile(contactsPath));

async function listContacts() {
  try {
    console.table(await getUserList());
  } catch (error) {
    console.error(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const jsonParseData = await getUserList();
    console.table(jsonParseData.find((item) => item.id === contactId));
  } catch (error) {
    console.error(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const jsonParseData = await getUserList();
    jsonParseData.filter(({ id }) => id !== contactId);

    console.table(jsonParseData);
    await fs.writeFile(contactsPath, JSON.stringify(jsonParseData));
  } catch (error) {
    console.error(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const jsonParseData = await getUserList();
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
