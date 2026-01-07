const express = require("express");
const router = express.Router();

router.use("/about", (req, res) => {
  res.send("This is a About Page");
  res.end();
});

router.use("/contact", (req, res) => {
  res.send("This is a Contact Page");
});

module.exports = router;
