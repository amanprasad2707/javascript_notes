// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   get password() {
//     return `${this._password}aman`.toUpperCase()
//   }
//   set password(value) {
//     this._password = value
//   }
// }
// const aman = new User('amanprasasd', 'aman@example.com', 'abc');
// console.log(aman.password);

// ***************************************************************

// function user1(email, password) {
//   this._email = email
//   this.password = password
//   Object.defineProperty(this, 'email', {
//     get: function () {
//       return this._email.toUpperCase()
//     },
//     set: function (value) {
//       this._email = value
//     }
//   })
// }

// const chai = new user1('chai@example.com', 'hello');
// console.log(chai.email)

// ****************************************************************************


const User = {
  _email: 'chai@example.com',
  _password: 'password',

  get email() {
    return this._email.toUpperCase().length
  },
  set email(value) {
    this._email = value
  }
}
const tea = Object.create(User)
console.log(tea.email)