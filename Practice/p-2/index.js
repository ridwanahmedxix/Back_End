const express = require("express");
const app = express();
const port = 3005;

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
