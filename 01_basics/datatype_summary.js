// there are two types of datatypes in JavaScript: primitive types and reference types.

// Primitive types include:

// 7 primitives datatypes in JavaScript:
// string , number, bigint, boolean, undefined, symbol, and null.

// string:
let name = "John Doe";
console.log(typeof name); // Output: string

// number:
let age = 30;
console.log(typeof age); // Output: number

// bigint:
let bigIntNum = 9007199254741991n;
console.log(typeof bigIntNum); // Output: bigint

// boolean:
let isActive = true;
console.log(typeof isActive); // Output: boolean

// undefined:
let address;
console.log(typeof address); // Output: undefined

// symbol:
let sym = Symbol("unique");
console.log(typeof sym); // Output: symbol

// null:
let emptyValue = null;
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript) 


// reference types (non primitive datatype):

// arrays, objects, functions, etc.

// array:
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // Output: object

// object:
let person = {
  name: "Alice",
  age: 25,
};
console.log(typeof person); // Output: object

// function:
function greet() {
  return "Hello!";
}
console.log(typeof greet); // Output: function

// In summary, JavaScript has 7 primitive data types (string, number, bigint, boolean, undefined, symbol, and null) and several reference types (arrays, objects, functions, etc.).