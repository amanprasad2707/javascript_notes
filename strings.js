name = "Aman"
age = 20
// console.log("My name is " + name + " and I am " + age + " years old");

// Template literals or string interpolation
// console.log(`My name is ${name} and I am ${age} years old`);
// another method of declaring a string
const anotherString = new String('         Hello, World!    World   ');

// ************************ String Methods ************************

console.log(anotherString)
console.log(anotherString.__proto__);
console.log(anotherString.length)
console.log(anotherString.toUpperCase())
console.log(anotherString.toLowerCase())
console.log(anotherString.trim())  // removes the whitespace from the string
console.log(anotherString.trimEnd())
console.log(anotherString.trimStart())
console.log(anotherString.at(10))   // returns the value at index 
console.log(anotherString.charAt(10))  // returns the value at index
console.log(anotherString.concat(name)) // concatenates two strings
console.log(anotherString.endsWith("a"))  // check if the string ends with a perticular character
console.log(anotherString.startsWith("W"))
console.log(anotherString.includes("World"))  // check if the world is present in the string
console.log(anotherString.indexOf("W"))  // returns the index of the character in the string (-1) if not present
console.log(anotherString.match(/[A-Z]/g))  // returns the matching pairs (add /[A-Z]/gi) for case insensitive
console.log(anotherString.padEnd(40, ".")) // completes the length of the string with adding . at the end
console.log(anotherString.padStart(40, ".")) // completes the length of the string with adding . at the start
console.log(anotherString.repeat(3))  // repeats the string
console.log(anotherString.replace("World", "Duniya"));  // replaces the first occuring word
console.log(anotherString.replaceAll("World", "Duniya")); // replaces all the occuring words
console.log(anotherString.search("Hello"))  // returns the index of the searched word
console.log(anotherString.slice(7, 13)) // returns the word from the range of the index
console.log(anotherString.split(","))   // returns an array of the splitted word
console.log(anotherString.substring(0, 15))  // returns the value from a range of indexes
console.log(anotherString.toString())