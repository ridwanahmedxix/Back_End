const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "ridwan ahmed",
    email: "ridwan@gmail.com",
  },
  {
    id: uuidv4(),
    username: "anisul ahmed",
    email: "anisul@gmail.com",
  },
];

module.exports = users;
