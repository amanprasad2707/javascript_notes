for (let i = 0; i < 100; i++) {
    // console.log(i);
}

let j = 0;
while (j <= 10) {
    // console.log(j);
    j++;
}

do {
    // console.log(j);
    j += 2;
} while (j < 10)


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (const i of arr) {
    // console.log(i)
}
for (const key in arr) {
    // console.log(arr[key])
}

/* ___________________________ Maps ___________________________ */

const map = new Map()  // maps are iterable
map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")
// console.log(map)

// for (const key of map) {
for (const [key, value] of map) {
    // console.log(key, ':- ', value)
}

const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}
for (const key in myObj) {
    // console.log(key)
}

const coding = ["python", "ruby", "C", "C++", "java", "ruby"]
coding.forEach(function (item) {
    // console.log(item)
})

coding.forEach((item) => {  // using arrow function
    // console.log(item)
})

function printMe(item) {  // using custom function
    // console.log(item)
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

const codingLanguages = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "kotlin",
        languageFileName: "kt"
    },
]
codingLanguages.forEach((item) => {  // does't return values
    console.log(item.languageFileName, ':-', item.languageName)
})