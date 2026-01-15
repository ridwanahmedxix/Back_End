const app = require("./app");
const port = 5500;

app.listen(port, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${port}`);
});
