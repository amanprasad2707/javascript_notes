class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword(password) {
    return `${this.password}abc`
  }
  changeUsername(username) {
    return `${this.username.toUpperCase()}`
  }
}
const chai = new User('chai', 'chai@example.com', 'chai@123');
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername())


// ********************* behind the scene ******************
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
user.prototype.encryptPassword = function () {
  return `${this.password}abc`
}
user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}