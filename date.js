const myDate = new Date()
console.log(typeof myDate)  // object
console.log(myDate)  // 2024-01-26T13:59:23.452Z
console.log(myDate.toString())  // Fri Jan 26 2024 19:30:58 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Fri Jan 26 2024
console.log(myDate.toLocaleDateString()) // 26/1/2024
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMonth())  // starts with 0
console.log(myDate.getFullYear())
console.log(myDate.toISOString()) // 2024-01-26T14:06:07.446Z
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())  // 26/1/2024, 7:37:06 pm
console.log(myDate.toUTCString()) //  Fri, 26 Jan 2024 14:07:26 GMT
console.log(myDate.toLocaleTimeString()) // 7:38:09 pm

const customDate = new Date(2023, 0, 23)
console.log(customDate.toLocaleString())   // 23/1/2023, 12:00:00 am
console.log(customDate.toDateString())  // Mon Jan 23 2023

let myTimeStamp = Date.now()
console.log(myTimeStamp)