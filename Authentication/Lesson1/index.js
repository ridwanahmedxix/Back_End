const express = require("express");
const app = express();
const PORT = 3600;

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
