const myName = 'aman       '
const myPasswd = 'dsfk#3jfk        '
console.log(myName.trim().length)

let myHeros = ['thor', 'spiderman']
let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',
  getSpiderPower: function () {
    console.log(`spidy power is: ${this.spiderman}`);
  }

}
Object.prototype.aman = function () {
  console.log('aman is present in all objects');
}
Array.prototype.heyAman = function () {
  console.log('heyAman says hello');
}

myName.aman()
// myName.heyAman()
myHeros.heyAman()
const User = {
  name: 'aman',
  email: 'aman@example.com'
}
const teacher = {
  makeVideo: true
}
const teachingSupport = {
  isAvaliable: false
}
const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: teachingSupport
}
teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

const anotherUsername = 'aman prasad'
String.prototype.trueLength = function () {
  console.log(this)
  console.log(`true length is:${this.trim().length}`);
}
anotherUsername.trueLength()
myName.trueLength()