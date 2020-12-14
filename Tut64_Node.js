/** @format */
// This create a server in NOdeJS
// console.log("Hello World")
const http = require('http');
// We use http module
const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>This is a heading in NodeJS</h1>');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
// What is Node.JS REPL
// It's a Read Evaluate and Print Loop is an interactive shell
// _ shows the previous variable in REPL
