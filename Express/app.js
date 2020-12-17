/** @format */

// What is express
// web application framework for the backend
// It handles routing and much more
// like scalability - it is free and open source
// fake api are always present on the internet
// you can use them without hesitation
const express = require('express');
const app = express();
const path = require('path')
const port = 80;
// for serving static files
// app.use('url', static_method('folder'));
app.use('/static', express.static('static'));

// Set the template engine at pug
app.set('view engine', 'pug');
// We can a make '.pug' file 
// We set the view directory as
app.set('views',path.join(__dirname,'views'))

// Our pug demo endpoint
app.get('/demo',(req,res)=>{
	res.status(100).render( 'demo',{title:'hey',message:"Hello there!!"})
});

app.get('/', (req, res) => {
	res.status(200).send('This is homepage of my first express app with Harry');
});
app.get('/about', (req, res) => {
	res.send('This is about-page of my first express app with Harry');
});
app.post('/about', (req, res) => {
	res.send('This is about-page of my first express app with Harry');
});
app.listen(port, () => {
	console.log(`The application started successfully on port ${port}`);
});
// Port 80 is the default port
// We can use the template engines - they [process] the template and convert the strings into arguments
// With nodejs we can use many template engine we are gonna use the pug
// Pug templates can be created and express takes care of it
