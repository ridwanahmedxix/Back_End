const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3500;

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
