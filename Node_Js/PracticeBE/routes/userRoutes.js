const express = require("express");
const router = express.Router();

router.use("/about", (req, res) => {
  res.send("Welcom to the about page");
});

router.use("/contact", (req, res) => {
  res.send("This is our Contact Section");
});

module.exports = router;
