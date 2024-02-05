/* write a javascript program to check two numbers and return true if one of the number is 100 
or if the sum of two number is 100 */
const num1 = 90;
const num2 = 10;
function checkNum(n1, n2) {
    if (n1 === 100 || n1 + n2 === 100 || n2 === 100) {
        return true;
    }
    else {
        return false;
    }
}

function checkNum3(n1, n2) {
    return (n1 === 100 || n1 + n2 === 100 || n2 === 100)
}

const checkNum2 = (n1, n2) => n1 === 100 || n2 === 100 || (n1 + n2 === 100)// using arrow function
// console.log(checkNum3(num1, num2))

/* write a javascript  program to get the extension of filename */
const str = "filename.js"
const getFileExtension = (str) => str.slice(str.lastIndexOf(".") + 1)
// console.log(getFileExtension(str))

/* write a javascript program to replace every character in a given string with the character
following it in the alphabet */
const moveCharsForward = (str) =>
    str
        .split("")
        .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
        .join("")

// console.log(moveCharsForward("abcdefghijklmnopqrstuvwxyz"))

/* write a javascript program to get the current date 
Expected output:
mm-dd-yyyy, mm/dd/yyyy, or dd-mm-yyyy, dd/mm/yyyy */
const myDate = new Date()
// console.log(myDate.toLocaleDateString())

/* write a javascript function to create a new string addding "New!" in front of a given string.
if the given string begins with "New!" already then return the original string */

const addNew = (str) => {
    if (str.startsWith("New!")) {
        return str;
    }
    else {
        return `New! ${str}`
    }
}

const addNew1 = (str) =>
    str.lastIndexOf("New!") === 0 ? str : `New! ${str}`
// console.log(addNew1("New! Offer"));


/* write a javascript program to create a new string from a given string taking the 
first three characters and the last three characters of a string and addding them together
the string length must be three or more, if not, the original string is returned. */

const newString = (str) =>
    str.length <= 3 ? str : (str.slice(0, 3) + str.slice(str.length - 3))  // str.slice(-3)
// console.log(newString("hello world"))

/* write a javascript program to extract the first half of a string of even length */
const firstHalf = (str) =>
    str.slice(0, (str.length) / 2)
// console.log(firstHalf("helloworld"))

/* write a javascript program to concatenate two strings except the first character */
const concatStr = (str1, str2) =>
    str1.slice(1) + str2.slice(1)
// console.log(concatStr("hello", "world"))

/* Given two values, write a javascript program to find out which one is nearest to 100 */
const closestTo100 = (a, b) =>
    (100 - a) < (100 - b) ? a : b
// console.log(closestTo100(51, 30));

/* write a javascript program to check a given string contains 2 to 4 occurrences
of a specific character */
const countChars = (str, char) =>
    str.split("").filter(ch => ch === char).length;

const conntains2to4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

// console.log(conntains2to4("oh", "o"))


/* write a javascript program to find the number of even digits in an array of interger */

const findEven = (digits) =>
    digits.filter((digit) => digit % 2 === 0).length
// console.log(findEven([3, 4, 2, 5, 6, 4, 3, 6, 12, 33, 45]))

/* write a javascript program to find the number of even values up to a given number */
const countEvenNumbers = (arr) =>
    arr.filter((num) => num % 2 === 0).length;
const createArray = (len) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr;
}
const findNumbers = countEvenNumbers(createArray(10))
// console.log(findNumbers)

/* write a javascript program to check whether a given array of intergers is sorted in ascending order */

const isSorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;     //  * why it's not working when we return true (arr[i] < arr[i+1] )  *
        }
    }
    return true;
}
// console.log(isSorted([1, 2, 3, 5, 6]))

/* write a javascript program to get  the largest even number from an array of interger */

const findLargestEven = (arr) =>
    arr.filter((num) => num % 2 === 0).reduce((a, b) => a > b ? a : b)

const largestEven = (arr) => {
    return Math.max(...arr.filter((num) => num % 2 === 0));
}
// console.log(largestEven([3, 4, 2, 5, 6, 4, 3, 6, 12, 33, 45]))

/* write a javascript program to replace the first digit in a string (should contain atleast digit) with $ character */
const replaceDigit = (str) =>
    str.replace(/[0-9]/g, "$")
// console.log(replaceDigit("hel23lo345 wor43ld"))

/* write a javascript program to compare two objects to determine if the first one contains the 
same property as the second one (which may also have additional properties) */
const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const obj2 = { a: 5, b: 6, c: 7, d: 8 }
const compareObjects = (obj1, obj2) => {
    return Object.keys(obj1).every(key => obj2[key]);
}
// console.log(compareObjects(obj1, obj2));

/* write a javascript function that returns true if the provided predicate function returns
true for all elements in a collection, false otherwise */
console.log([1, 2, 3, 4, 5].every(x => x > 0))

/* write a javascript function that returns a passed string with letter in alphabetical order
Example string: 'webmaster'
Expected output: 'abeemrstw'
*/
const arangeCharacter = (str) => {
    return str.split('').sort().join("")
}
// console.log(arangeCharacter("javascript"))

/* write a javascript function that accepts a string as a parameter and counts the number of vowels within the string */
const countVowels = (str) => {
    let vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i]))
            count++;
    }
    return count;
}
// console.log(countVowels("hello world"))

/* write a javascript program to convert an amount to coins. 
Example input: 46 and possible coins 25, 10, 5, 2, 1
Expected output: 25 ,10, 10 , 1 */
const countCoins = (money, coins = [50, 20, 10, 5, 2, 1]) => {
    const totalCoins = []
    for (let i = 0; i < coins.length; i++) {
        // const coin = coins[i];
        const thisCoinNum = Math.floor(money / coins[i]);
        for (let j = 0; j < thisCoinNum; j++) {
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins;
}
// console.log(countCoins(46))

/* write a javascript program to extract unique characters from a string */
const getUniqueChars = (str) =>
    str.split('').filter(
        (item, index, array) =>
            array.slice(index + 1).indexOf(item) === -1
    );

const getUniqueChars2 = (str) =>
    [... new Set(str.split(''))]

// console.log(getUniqueChars("aaaabbbbcccccanca"))


/* write a javascript program to find the first not repeated character in the string
Example string: 'abacddbec'
Expected output: 'e'  */

const getNonRepeatedChar = (str) =>
    str.split('')
        .filter((item, index, arr) =>
            arr.filter(arrItem => arrItem === item).length === 1);

// console.log(getNonRepeatedChar("abacddbec"))



const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// what is the average income of all the people in the array?
const avgSalary = people.reduce((accumulator, person) => accumulator + parseInt(person.salary), 0) / people.length;
console.log(avgSalary);
// who are the people that are currently older than 40?
const olderThan30 = people.filter((person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 40);
console.log(olderThan30);

// get a list of the people's full name (first name and last name)
const getFullName = people.map((person) => ({ ...person, fullName: `${person.firstName} ${person.lastName}` }))
console.log(getFullName);

// get a list of the people's in the array ordered from youngest to oldest
const getOrderedList = people.sort((person1, person2) => new Date(person2.DOB) - new Date(person1.DOB))
console.log(getOrderedList);

// how many people are there in each department?
const peoples = people.reduce((acc, person) => ({ ...acc, [person.department]: acc[person.department] + 1 || 1 }), {});
console.log(peoples)

const orders = [
    {
        orderId: '123',
        customerId: '123',
        deliveryDate: '01-01-2020',
        delivered: true,
        items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 }
        ]
    },
    {
        orderId: '234',
        customerId: '234',
        deliveryDate: '01-02-2020',
        delivered: false,
        items: [
            { productId: '234', price: 30 }
        ]
    },
    {
        orderId: '345',
        customerId: '234',
        deliveryDate: '05-01-2020',
        delivered: true,
        items: [
            { productId: '567', price: 38 },
            { productId: '678', price: 80 }
        ]
    },
    {
        orderId: '456',
        customerId: '345',
        deliveryDate: '12-01-2020',
        delivered: true,
        items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 }
        ]
    },
    {
        orderId: '578',
        customerId: '456',
        deliveryDate: '12-01-2020',
        delivered: true,
        items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 }
        ]
    }
];
// get a list of the orders for the customer with the ID 234 that have not been delivered
const checkStatus = orders.filter(order => order.customerId === '234' && !order.delivered)
console.log(checkStatus);
// create a new property on each order with the total price of items ordered
const totalPrice = orders.map(order => ({ ...order, orderTotal: order.items.reduce((acc, item) => acc + item.price, 0) }))
console.log(totalPrice);

// Have all the orders been delivered?
const checkDeliveryStatus = orders.every(order => order.delivered)
console.log(checkDeliveryStatus);

// Has the customer with ID '123' made any orders?
const checkCustomerOrder = orders.some(order => order.customerId === '123')
orders.filter(order => order.customerId === '123')
console.log(checkCustomerOrder);

// Have any products with an ID of '123' been sold?
const productSold = orders.reduce((acc, order) => acc + order.items.reduce((acc, item) => acc + (item.productId === '123'), 0), 0)
console.log(productSold);

const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7fe53852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe816f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee984be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d9e8e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' }
];

const comments = [
    { userId: '88f24bea-3825-4237-a8d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7fe53852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that?' },
    { userId: '71853852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one' },
    { userId: '6ee984be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe816f7b64', text: 'Cool' },
    { userId: '6ee984be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' }
];

// what is Madison Marshall's user id?
const findID = users.find(user => user.firstName === 'Madison' && user.lastName === 'Marshall');
console.log(findID);
// who wrote the first comment (assuming the first comment is in position 0 of the comments array)
const userWithComment = users.find(user => user.id === comments[0].userId);
console.log(userWithComment);

// which user commented 'Ok great thanks'?
const findUserId = comments.find(comment => comment.text === 'Ok great thanks');
console.log(findUserId)