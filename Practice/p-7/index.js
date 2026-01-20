const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2900;

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
