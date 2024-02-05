class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password}aman`.toUpperCase()
  }
  set password(value) {
    this._password = value
  }
}
const aman = new User('amanprasasd', 'aman@example.com', 'abc');
console.log(aman.password);