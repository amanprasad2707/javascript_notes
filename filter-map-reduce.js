// ********************************** Filter *******************************

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const myNum = num.filter((num) => num > 5)  // filter returns value  implicit return
const myNum1 = num.filter((num) => {
    return num > 5                          // explicit return
})
console.log(myNum1)

const myNum2 = []
num.forEach((num) => {
    if (num > 5) {
        myNum2.push(num)
    }
})
console.log(myNum2)


const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1961, edition: 2005 },
    { title: 'Book two', genre: 'Non-Fiction', publish: 1971, edition: 2003 },
    { title: 'Book three', genre: 'History', publish: 1941, edition: 2004 },
    { title: 'Book four', genre: 'Science', publish: 1931, edition: 2056 },
    { title: 'Book five', genre: 'Fiction', publish: 1921, edition: 2006 },
    { title: 'Book six', genre: 'History', publish: 1961, edition: 2006 },
    { title: 'Book seven', genre: 'Fiction', publish: 1461, edition: 2007 },
    { title: 'Book eight', genre: 'History', publish: 1561, edition: 2005 },
    { title: 'Book nine', genre: 'Fiction', publish: 1961, edition: 2003 },
    { title: 'Book ten', genre: 'History', publish: 1963, edition: 2005 },
    { title: 'Book eleven', genre: 'Science', publish: 1921, edition: 2007 },
    { title: 'Book twelve', genre: 'Non-Fiction', publish: 1911, edition: 2012 }
]
let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => { return bk.publish >= 1961 }) // here scope is open so we have to use return
userBooks = books.filter((bk) => bk.genre === 'History' && bk.edition >= 2005)
console.log(userBooks)


// ********************************** Map ********************************
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let newNums = myNumbers.map((nums) => nums + 10)     // it automatically returns value
newNums = myNumbers
    .map((nums) => nums + 10)
    .map((nums) => nums * 10)  // passes the value of nums in second chain
    .filter((nums) => nums >= 130)
console.log(newNums)


// ****************************** Reduce ********************************
const nums = [11, 25, 81]
const myTotal = nums.reduce(function (accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator + currentValue
}, 0)  // initial value of accumulator
console.log(myTotal)

// ----------------- reduce using arrow functions --------------
const myTotal1 = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(myTotal1)

const myShoppingCart = [
    { courseName: 'javascript', price: 899 },
    { courseName: 'python', price: 2899 },
    { courseName: 'kotlin', price: 399 },
    { courseName: 'C++', price: 4599 },
    { courseName: 'React', price: 6499 }
]

const total = myShoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(total);