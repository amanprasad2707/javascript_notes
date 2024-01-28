// Immediately Invoked Function Expressions (IIFE)

(function database() {    // named IIFE
    console.log(`Database connection established`)
})();  // to end the invoked function use semicolon otherwise it will throw error if we another IIFE
// due to problems with pollution of global scope we use IIFE to remove the pollution of global variables

((name) => {
    console.log(`Hello ${name}`)
})("World")

function hello() {
    console.log("hello duniya")
}
hello()