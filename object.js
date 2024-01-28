// **************************** object literals ****************************

let mySym = Symbol("myKey1")
let userName = {
    name: "Aman",
    "fullName": "Aman Prasad",
    [mySym]: "myKey",               // implement symbol in object
    age: 18,
    location: "haryana",
    email: "aman@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Sun", "Mon", "Tue", "Wed", "Thu"]
}

console.log(userName)
console.log(userName["fullName"])
console.log(userName)

userName.age = 20
console.log(userName.age)
userName.email = "aman@google.com"
console.log(userName)

userName.greeting = function () {
    console.log("Hello User!")
}
userName.greeting2 = function () {
    console.log(`Hello ${this.name}!`)  // string interpolation
}

console.log(userName.greeting())
console.log(userName.greeting2())

Object.freeze(userName)            // Prevents the modification of values



// **************************** Object Singleton ****************************

const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name = "Rohan"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "someone@example.com",
    name: {
        firstName: "Aman",
        lastName: "Prasad"
    }
}
console.log(regularUser.name.firstName)


// ++++++++++++++++++++++++++++ Merge or Combine two Objects ++++++++++++++++++++++++++++

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }
const obj3 = { obj1, obj2 }
const obj4 = Object.assign({}, obj1, obj2)
obj5 = { ...obj1, ...obj2 }   // spread operator
console.log(obj4)
console.log(obj5)

console.log(Object.keys(tinderUser))   // returns an array of keys of the object
console.log(Object.values(tinderUser)) // returns an array of values of the object
console.log(Object.entries(tinderUser))// returns an nested array of key-value pairs of the object
console.log(tinderUser.hasOwnProperty("isLoggedIn")) // returns true if key is present in the object


// ++++++++++++++++++++++++++ Destructure of Objects ++++++++++++++++++++++++++
const course = {
    courseName: "JS in Hindi",
    courseFees: 999,
    courseInstructor: "Hitest Choudhary"
}
const { courseInstructor: instructor } = course;  // destructuring of object
// console.log(courseInstructor);
console.log(instructor)