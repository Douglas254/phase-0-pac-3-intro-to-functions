// Follow along with the examples here

// Writing and Calling JavaScript Functions

console.log("Hello, world!");

function doNothing() {}

function sayHello() {
  console.log("Hello!");
}

sayHello(); // calling

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

// Understand arguments and parameters
function doSomething(thing) {
  console.log(thing);
}

doSomething("Douglas Obara");

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

// Saying something new
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Douglas");

// Order of Arguments
say("Douglas", "Hello");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

// Return Values in JavaScript
function add(x, y) {
  return x + y;
}

console.log(add(1, 2)); // 3
console.log(add(80, 9000)); // 9080

function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}

console.log(say("Hello it's me", "Douglas"));
