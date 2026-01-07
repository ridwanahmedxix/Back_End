const express = require("express");
const router = express.Router();

router.get("/registar", (req, res) => {
  res.send("This is a Registar Page");
  res.end();
});

router.get("/login", (req, res) => {
  res.send("This is a Login Page");
  res.end();
});

module.exports = router;
