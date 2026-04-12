const fs = require("fs");

fs.appendFile("Demo1.txt", " . Hello! my name is Ridwan Ahmed", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
