function multiplyBy5(num) {
  return num * 5
}
multiplyBy5.power = 12
console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, password) {
  this.username = username
  this.password = password
}
createUser.prototype.increment = function () {
  this.password++;
}
createUser.prototype.printMe = function () {
  console.log(`username is: ${this.username}`);
  console.log(`password is: ${this.password}`);
}
const aman = new createUser('amanprasad', "aman@123");
const mohan = new createUser('mohanjain', "mohan@123");

aman.printMe();