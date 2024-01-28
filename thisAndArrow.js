const user = {
    username: "Aman",
    age: 20,
    greeting: function () {
        console.log(`Hello, ${this.username}`);
        console.log(this)
    }
}
user.greeting()

// ******************************* Arrow Functions *******************************
const chai = () => {
    let username = "Aman"
    console.log(this)   // this is not used in arrow functions
}
chai()

const addNumber = (num1, num2) => num1 + num2  // inplicit return
const addNumber2 = (num1, num2) => (num1 + num2) // no need to add return if parentheses are used
console.log(addNumber(23, 3))
console.log(addNumber2(23, 3))