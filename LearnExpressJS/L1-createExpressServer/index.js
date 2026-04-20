const app = require("./app");

const PORT = 2600;

app.listen(PORT, () => {
  console.log(` THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
