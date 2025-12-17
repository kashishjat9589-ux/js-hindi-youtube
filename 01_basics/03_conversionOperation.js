let score = 45

// console.log(typeof score)

// 45 = 45
// 45abc = NaN (not a number)
// true = 1
//false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let someNumber = 29
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);

//*******************************Operations***********************//

let value = 3
let negValue = -value
console.log(negValue);

let strNumber = "45"
let numNumber = +strNumber
console.log(typeof numNumber);  


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**5);
// console.log(2%2);


let str1 = "Hello "
let str2 = " World"
let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2); if the no. start with the string it converts everything to string
// console.log(1 + 2+ "2"); if it dosn't start with string it adds numbers first
// console.log("1" + "2");


let gameCounter = "100"
gameCounter = ++gameCounter
console.log(gameCounter);