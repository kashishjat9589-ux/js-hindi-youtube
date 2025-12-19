function sayMyName() {
    console.log("kashish jat");
}

// sayMyName();

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNum(4, 5);
    

function addTwoNum(num1, num2) {
    // let result = num1 + num2;
    // return result;


    return num1 + num2;
}

const num = addTwoNum(4, 5);
// console.log(num);

function loginUserMessage (username){
    return `Hello ${username} just logged in`
}
// console.log(loginUserMessage("kashish"));


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(100) + 50);


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300));

const user = {
    name: "kashish",
    price:450
}

function handleObject(obj){
    console.log(`hello ${obj.name} your price is ${obj.price}`);
}

// handleObject(user);

const myArray = [1,2,3,4,5];

function handleArray(getArray){
    return getArray[2]
}
console.log(handleArray(myArray));