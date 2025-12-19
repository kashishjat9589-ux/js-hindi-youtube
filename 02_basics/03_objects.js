// SINGLETON OBJECT

//constructor se agr bnega to singleton hi banega//
//literal li trh declare krne pr singleton nhi bnta h//

//++++++++++++++++++++OBJECT LITERAL++++++++++++++++++++++//

const mysymbol = Symbol("my unique identifier");

const student = {
    name: "kashish",
    age: 21,
    address: "pune",
    email: "kashish@example.com",
    isLoggedIn: true,
    [mysymbol]: "my unique identifier value",
}

// console.log(student);

// student.age = 22;
// Object.freeze(student);
// student.age = 23; //will not change due to freeze
// console.log(student.age);

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

student.greeting = function() {
    console.log("Hello, welcome " + this.name);
}
console.log(student.greeting());
