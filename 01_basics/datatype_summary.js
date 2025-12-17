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



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MEMORY

// TYPES OF MEMORY

// 2 TYPES OF MEMORY IN JAVASCRIPT:

// 1. STACK MEMORY
// 2. HEAP MEMORY

// STACK MEMORY: It is used to store primitive data types (string, number, boolean, null, undefined, symbol, bigint) and function calls. Stack memory is faster and has a LIFO (Last In First Out) structure.

let myyoutubeChannel = "CodeWithHarry"; // stored in stack memory
let anotherName = myyoutubeChannel; // stored in stack memory
anotherName = "CodeWithChai"; // stored in stack memory

console.log(myyoutubeChannel); // Output: CodeWithHarry
console.log(anotherName); // Output: CodeWithChai

// HEAP MEMORY: It is used to store reference data types (objects, arrays, functions). Heap memory is larger and more flexible than stack memory but is slower to access.

let userOne = {
  name: "Harry",
  age: 22,
}; // stored in heap memory

let userTwo = userOne; // both userOne and userTwo point to the same object in heap memory
userTwo.age = 23; // modifying the object through userTwo

console.log(userOne.age); // Output: 23
console.log(userTwo.age); // Output: 23

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++