const express = require("express");
const { getUsers, saveUser } = require("../controllers/userController");
const router = express.Router();

router.get("/user", getUsers);
router.post("/user", saveUser);

module.exports = router;
