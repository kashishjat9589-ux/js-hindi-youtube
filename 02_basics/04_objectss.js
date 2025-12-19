// const tinderuser = new Object();

const tinderuser = {}

tinderuser.name = "kashish";
tinderuser.age = 21;
tinderuser.isLoggedIn = false;
tinderuser.lastLoginDays = ["Monday", "Friday"];


// console.log(tinderuser);

const regularUser = {
    fullName: {
        userName:{
            firstName: "kashish",
            lastName: "jat"
        }
    }
}

// console.log(regularUser.fullName.userName.lastName);

obj1 ={1: "a", 2:"b", 6:"c"};
obj2 ={7: "a", 8:"b", 9:"c"};
obj3 ={3: "d", 4:"b", 5:"c"};

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);


const course ={
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "kashish jat"
}

const {courseName, price, courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(instructor);
