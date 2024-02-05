// Primitive data types:
// String, Number, Boolean, null, undefined, Symbol, BigInt (these are call by value type)
// Non primitive data types (referenced data types):
// Array, Objects, Functions

const id = Symbol("123");
const anotherId = Symbol("123");  // uniquely identifies
console.log(id == anotherId)
console.log(typeof null)  // type is object
let bigNumber = 1232435452452n // bigInt
console.log(typeof bigNumber)
console.log(typeof id)  // symbol

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// ************************* Stack and Heap **************************
// stack (primitive)
// heap (non primitive)
let name = 'aman';
let anotherName = name;
anotherName = "rohan";
console.log(name)
console.log(anotherName)   // doesn't change the value because we get the copy of the variable

let user1 = {
    username: "Aman",
    useremail: "aman@gmail.com"
}
let user2 = user1
user2.useremail = "aman@example.com"  // change the value because we get the reference 
console.log(user2.useremail)
console.log(user1.useremail)