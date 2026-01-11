const express = require("express");
const app = express();
const port = 3006;

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
