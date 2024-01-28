const emptyArray = []
const emptyObject = {}
const userEmail = "admin@example.com";
if (userEmail) {
    console.log("Got user email")
} else {
    console.log("No user email")
}

// ********************** Falsy values *************************
/*       false , 0 , -0, BigInt 0n, "" , null, undefined, NaN     */


// ********************** Truthy values *************************
/*       "0", 'false', " ", [], {}, function(){}               */


// ************************** Check empty array or object **************************

if (emptyArray.length === 0) {
    console.log("Empty array")
}
if (Object.keys(emptyObject).length === 0) {
    console.log("Empty object")
}


// ***************   Nullish Coalescing Operator(??): null undefined   ************

let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 10
console.log(val1)
console.log(val2)
console.log(val3)

// ******************* Terniary Operator ************************
const teaPrice = 130
teaPrice < 100 ? console.log("less than 100") : console.log("greater than 100")