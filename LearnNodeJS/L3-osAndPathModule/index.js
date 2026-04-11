//    OS PATH

// -------- PART - 1  --------------

// const os = require("os");
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());

// -------- PART - 2  --------------

// const { totalmem, freemem } = require("os");
// console.log(totalmem());
// console.log(freemem());

// -------- PART - 3  --------------

// console.log(__dirname);
// console.log(__filename);

// -------- PART - 4 - PATH  --------------

// const path = require("path");

// const extensionName = path.extname("index.html");
// console.log(extensionName);

// ----------------------------------------

const path = require("path");

const joinName = path.join(__dirname + "Data");
console.log(joinName);
