// This is a single-line comment. It's ignored by the JavaScript interpreter.

/*
   This is a multi-line comment.
   It can span multiple lines.
   Use it for longer explanations.
*/

// Variables
var firstName = "John"; // Declaring a variable and assigning a string value
let lastName = "Doe"; // Declaring a variable with block scope
const age = 30; // Declaring a constant variable

// Data Types
let num = 42; // Number
let isTrue = true; // Boolean
let greeting = "Hello, World!"; // String
let fruits = ["apple", "banana", "cherry"]; // Array
let person = { firstName: "John", lastName: "Doe" }; // Object

// Basic Output
console.log("Hello, World!"); // Output to the console

// Conditional Statements
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

// Functions
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(5, 3);
console.log("Sum:", sum);

// Event Handling (Browser-specific)
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});

// DOM Manipulation (Browser-specific)
document.getElementById("myElement").innerHTML = "New content";

// Try-Catch (Error Handling)
try {
  // Code that may throw an error
  throw new Error("This is an error.");
} catch (error) {
  console.error("An error occurred:", error.message);
}

// That's a basic overview of JavaScript. There's much more to explore!
