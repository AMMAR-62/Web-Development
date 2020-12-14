/** @format */

// Synchronous and Unsynchronous
// is same as Blocking and Non-Blocking
// Synchronnous - line-by-line execution
// Unsynchronous - line-by-line execution not guaranteed but call-back will fire
// ReadFileSync - this states that do not execute any further untill reading the file
const fs = require('fs');
let text = fs.readFile('Tut1_Intro.txt', 'utf-8', (err, data) => {
	console.log(err, data);
});
console.log('This is a message');
