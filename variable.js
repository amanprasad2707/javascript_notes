let variable1 = 45;
let variable2 = "234a"
// console.log(typeof (variable1));
// console.log(variable1);
// console.log(typeof (variable2));
// console.log(variable2);
let variable3 = Number(variable2);
// console.log(typeof (variable3));
// console.log(variable3);

let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let somevariable = 33;
let somevariable2 = String(somevariable);
console.log(somevariable2);
console.log(typeof (somevariable2));



// **********************  Notes ********************************
// "33" => 33 number
// "32a" => NaN number
// null => 0 number
// undefined => NaN number

// 1 => true
// 0 => false
// "" => false
// " " => true
// "aman" => true



// ********************** Operations ********************************

// console.log("3" + "4");
// console.log("3" + 4);
// console.log(3 + "5");
// console.log("1" + 3 + 5);
// console.log(1 + 3 + "5");
// console.log(2 + "5" + 6);
// let checkType = 1 + 3 + "5";
// console.log(typeof (checkType));

// console.log(true);  // true
// console.log(false); // false
// console.log(+true); // 1
// console.log(+false); // 0

// let x = 3;
// const y = x++;
// console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"
// let a = 3;
// const b = ++a;
// console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"

// console.log("2" > 1);
// console.log("2" > "1");
// console.log("2" > 1);
// console.log(2 > "1");
console.log(null == 0); // false
console.log(null < 0);  // false
console.log(null > 0);  // false
console.log(null <= 0);  // true
console.log(null >= 0);  // true

// the reason is that an equality check == and comparisons <= >=  < > works differently.
// comparisions converts null to a number treating it as zero 
