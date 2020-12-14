/** @format */

// We learn about built-in Modules in Node
// It's similar to Libraries in front-end JS
// We can use modules to follow the DRY strategy
const fs = require('fs');
let text = fs.readFileSync('dele.txt', 'utf-8');
text = text.replace('console', 'Rohan');
fs.writeFileSync('ammar.txt', text);
console.log(text);
// This synchronously reads all the contents of the file
// we use npm to install the third party modules
