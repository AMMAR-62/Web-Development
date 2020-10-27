/** @format */

console.log('This is Tutorial 53');
// Sometimes we need to repeat a code for more than once
let name = 'Ammar';
console.log(`${name} is a good boy`);
let name1 = 'Sahil';
console.log(`${name1} is a good boy`);
let name2 = 'Shubham';
console.log(`${name2} is a good boy`);
let name3 = 'Nityansh';
console.log(`${name3} is a good boy`);

// Can i not shorten this damn code?
// Yup, we can do it with the help of functions
// The use of functions in programme is called functional programming

// Take this example
// We can use any numbr of arguments for a function
function greet(name, greettext = 'Good Evening') {
	let name1 = 'Rakesh';
	console.log(`Hello ${name}, ${greettext} `);
}
// We used the function we no return value

// Here we use a return value for the function
function sum(a, b, c) {
	let d = a + b + c;
	return d;
	// If you write anything here i.e. after the return statement
	// it will not be executed
}

greet(name, 'Good Morning');
greet(name1, 'Good Afternoon');
greet(name2);
// We are using the default function here
greet(name3, 'Good Night');

let sumThis = sum(1, 2, 3);
console.log(sumThis);
// We can call greet function any number of times
// Since we have talked about local variable so even if i use the name1
// in greet fucntion it will not make any change in the global name1

// The Best practices in the function are:
// Let one function be for one task
// make your functions easy to use

// Quick quiz - min, max, etc
