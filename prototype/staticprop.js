class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`${this.username} logged in`);
  }
  static createId() {
    return '123'
  }
}
class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email;
  }
}
// const aman = new User('amanprasad');
// console.log(aman.createId());
const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe()