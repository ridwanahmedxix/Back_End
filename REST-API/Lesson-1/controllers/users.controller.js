const users = require("../models/users.model");

const getAllusers = (req, res) => {
  res.status(200).json({ users });
};

module.exports = { getAllusers };
