const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
