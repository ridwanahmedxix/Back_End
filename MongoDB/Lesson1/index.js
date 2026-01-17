const express = require("express");
const app = express();
const PORT = 2500;

app.listen(PORT, () => {
  console.log(`The Server Is Runing At http://localhost:${PORT}`);
});
