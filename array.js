// arrays are referenced type
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const alphabets = ["A", "B", "C", "D", "E"]
const myArray = new Array(1, 2, 3, 4, 5)

// ******************************** Array Methods ******************************************
// console.log(myArray)
myArray.push(6)   // adds the element at the end of the array
myArray.pop() // removes the last element
myArray.unshift(9) // adds the element at the beginning of the array
// it is a time consuming operation because it shifts all the elements
myArray.shift() // removes the element from the beginning of the array
myArray.includes(5) // returns boolean value
myArray.indexOf(5)   // returns the index of the element
const newArray = myArray.join()  // returns a copy of an array into string datatype
console.log(myArray.slice(1, 4))  // returns a copy of the sliced array
console.log(myArray.splice(1, 4)) // changes the original array and remove all the elements in the range
// console.log(myArray)

// *************************************************************************

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"]
// marvelHeros.push(dcHeros)  // changes the original array
const allHeros = marvelHeros.concat(dcHeros)  // returns a new array 
console.log(allHeros)
const allNewHeros = [...marvelHeros, ...dcHeros] //spread operator concatanates two arrays
console.log(allNewHeros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11, [12, 13, 14, [15, 16, 17]]]]
const usableArray = anotherArray.flat(Infinity) // returns a new array with all sub arrays elements concatnated
console.log(usableArray)
console.log(anotherArray)

console.log(Array.isArray("Aman"))  // returns true if the array is an array
console.log(Array.from("1244"))   // converts string to an array
console.log(Array.from({ key: "value" }))
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1, score2, score3, score4)) // returns a new array from a set of elements