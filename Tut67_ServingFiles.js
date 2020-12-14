/** @format */

// This shows how to serve HTML files from backend
const http = require('http');
const fs = require('fs');
const { type } = require('os');
const fileContent = fs.readFileSync('Tut1_Intro.txt');
const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-type': 'text/html' });
	res.end(fileContent);
});
server.listen(80, '127.0.0.1', () => {
	console.log('Listening on port 80 ... ');
});
// The port no 80 is the default port and we can directly use the server name and it will listen on port no. 80
