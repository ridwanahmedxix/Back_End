// ===========================
// 1. File Operations - Delete File
// ===========================
const fs = require("fs");

// Delete "about.txt" file
fs.unlink("about.txt", (err) => {
if (err) {
console.log("Error deleting file:", err);
} else {
console.log("File deleted successfully!");
}
});

// ===========================
// 2. File Operations - Rename File
// ===========================
fs.rename("demo1.txt", "demoFile.txt", (err) => {
if (err) {
console.log("Error renaming file:", err);
} else {
console.log("File renamed successfully!");
}
});

// ===========================
// 3. OS Module Examples
// ===========================
const os = require("os");

// User info
// console.log(os.userInfo());

// Home directory
// console.log(os.homedir());

// Hostname
// console.log(os.hostname());

// Total memory
console.log("Total Memory:", os.totalmem());

// Free memory
console.log("Free Memory:", os.freemem());

// Using destructuring
const { totalmem, freemem } = require("os");
console.log("Total Memory (destructured):", totalmem());
console.log("Free Memory (destructured):", freemem());

// ===========================
// 4. Path Module Examples
// ===========================
const path = require("path");

// Current file name
console.log("**filename:", **filename);

// File extension
const extensionName = path.extname("index.html");
console.log("File extension:", extensionName);

// Join paths example
// const joinName = path.join(\_\_dirname, "views");

// ===========================
// 5. HTTP Server Example
// ===========================
const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
res.end("Hello, I am your first server!");
});

myServer.listen(port, hostName, () => {
console.log(`Server is running successfully at http://${hostName}:${port}`);
});

// Note: Press Ctrl + C to stop the server
