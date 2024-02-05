const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls, cryptography, network 
  setTimeout(() => {
    console.log("done");
    resolve();
  }, 1000);
})
promiseOne.then(function () {
  console.log("promise consumed");
})

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('async task completed')
    resolve();
  }, 1000);
}).then(function () {

  console.log('promise resolved successfully')
})

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: 'amanprasad', email: "aman@example.com" });
  }, 1000);
})
promiseThree.then(function (user) {
  console.log(user)
})

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: 'amanprasad', email: "aman@example.com" });
    }
    else {
      reject('ERROR: Something went wrong')
    }
  }, 1000);
})
promisefour.then(function (user) {
  console.log(user)
  return user.username;
}).then(function (username) {
  console.log(username)
}).catch(function (err) {
  console.log(err)
}).finally(() => console.log('the promise is either resolved or rejected'))

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: 'javascript', email: "js@example.com" });
    }
    else {
      reject('ERROR: Kuch to garbar h daya')
    }
  }, 1000);
})
async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
consumePromiseFive()

async function getAllUser() {
  try {
    const response = await fetch('https://api.github.com/users/amanprasad2707')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// getAllUser()

fetch('https://api.github.com/users/amanprasad2707')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
