const getAllusers = (req, res) => {
  res.status(200).json({
    message: "Hello All Users ",
  });
};
const getOneusers = (req, res) => {
  res.status(200).json({
    message: "Hello One Users ",
  });
};
const createUser = (req, res) => {
  res.status(201).json({
    message: "Hello - User is Created ",
  });
};
const updateUser = (req, res) => {
  res.status(200).json({
    message: "Hello - User is updated ",
  });
};
const deleteUser = (req, res) => {
  res.status(200).json({
    message: "Hello - User is updated ",
  });
};

module.exports = { getAllusers };
