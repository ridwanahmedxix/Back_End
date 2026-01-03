const fs = require("fs");
fs.rename("demo1.txt", "demoFile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
    // console.log(data);
  }
});
