const express = require("express");

const { getUsers, saveUser } = require("../controller/userController");
const router = express.Router();

router.get("/user", getUsers);
router.post("/user", saveUser);

module.exports = router;
