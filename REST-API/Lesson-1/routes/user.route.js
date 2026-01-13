const express = require("express");
const { getAllusers } = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getAllusers);

module.exports = router;
