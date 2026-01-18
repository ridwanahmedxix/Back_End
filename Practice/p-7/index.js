const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3500;

app.listen(PORT, () => {
  console.log(`The Server Is Runing At http://localhost:${PORT}`);
});
