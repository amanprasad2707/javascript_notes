class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`${this.username} logged in`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`a new course is added by ${this.username}`);
  }
}
const chai = new Teacher('aman', 'aman@example.com', '123')
chai.addCourse()
const masalaChai = new User('masala')
masalaChai.logMe()
chai.logMe()
console.log(chai instanceof Teacher)