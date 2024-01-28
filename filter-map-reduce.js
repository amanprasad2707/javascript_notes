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