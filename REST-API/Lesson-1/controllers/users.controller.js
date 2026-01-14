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
  res.status(200).json({
    message: " This is Update Section",
  });
};

module.exports = { getAllusers, createUser, updateUser };
