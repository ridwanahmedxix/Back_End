let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
// Get User
const getAllusers = (req, res) => {
  res.status(200).json({ users });
};

// Create User
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json(users);
};

// Update User
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduder) => {
      selecteduder.username = username;
      selecteduder.email = email;
    });
  res.status(200).json(users);
};
// Delete User
const deleteUser = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);

  res.status(200).json(users);
};

module.exports = { getAllusers, createUser, updateUser, deleteUser };
