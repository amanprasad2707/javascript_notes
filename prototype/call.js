function setUsername(username) {
  this.username = username;
  console.log("called")
}
function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const user = new createUser('aman', "aman@example.com", "aman@123");
console.log(user);