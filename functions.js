function calculateCartPrice(val1, val2, ...val) {   // ...val is rest or spread operator
    return val
}
console.log(calculateCartPrice(12, 43, 123, 543, 564, 42, 234))

const user = {
    username: "Aman",
    age: 20
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and the age is ${anyObject.age}`)
}

handleObject(user)

const myArray = [100, 200, 300, 400,]
function returnSecondElement(getArray) {
    return getArray[1]     // explicit return
}
console.log(returnSecondElement(myArray))


function greeting(message) {
    if (!message) {                // assume undefined is false
        console.log("Please enter username")
        return
    }
    console.log(`Hello ${message}`)
}
greeting("aman")

console.log(addOne(2))
function addOne(num) {     // hoisting
    return num + 1
}
const addTwo = function (num) {  // not hoisted
    return num + 2
}
console.log(addTwo(2))