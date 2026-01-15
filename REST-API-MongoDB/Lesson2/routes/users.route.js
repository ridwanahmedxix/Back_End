const express = require("express");
const { getAllusers } = require("../controlles/users.controller");
const router = express.Router();

router.get("/", getAllusers);

module.exports = router;
