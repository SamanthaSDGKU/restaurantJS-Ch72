console.log("Script");
// Comments
// comments are note for devs- browser igonores them

//Strings
// A string is text. Always is wrappe in quotes.

let firstName = "Kydani";
let city = "San Diego";


console.log(firstName);
console.log(city);

// Numbers
let age = 25;
let gpa = 4.0;

console.log(age);
console.log(gpa);

//Boolean 
// A boolean is either true or false 

let isStudent = true;
let isVA = false;

console.log(isStudent);
console.log(isVA);

// Arithmetic operations
let num1 = 10;
let num2 = 3;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("Sum:" + sum);
console.log("Sub:" + sub);
console.log("Mul:" + mul);
console.log("Div:" + div);

// Build string with variables

//Option 1: concatenation (using +)
console.log("My name is: " + firstName + " and I live in " + city);

//Option 2: template literal (cleaner use ``)
console.log(`My name is ${firstName} and I live in ${city}`);

// constants 
//const = this value will NEVER change
const daysInWeek = 7;
const pi = 3.1416;

//daysInWeek = 5; this is an error

console.log(daysInWeek);
console.log(pi);