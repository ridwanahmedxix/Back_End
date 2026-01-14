const express = require("express");
const {
  getAllusers,
  createUser,
  updateUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getAllusers);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;
