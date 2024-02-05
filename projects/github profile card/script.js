const avatar = document.querySelector('img')
const name = document.querySelector('#name')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const repo = document.querySelector('#repo')
const bio = document.querySelector('#bio')
const button = document.querySelector('#submit')
const userInput = document.querySelector('input')
const requestURL = 'https://api.github.com/users/';
button.addEventListener('click', (e) => {
  e.preventDefault();
  const username = userInput.value
  console.log(username)

  fetch('https://api.github.com/users/' + username)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      avatar.setAttribute('src', data.avatar_url)
      followers.innerHTML = data.followers + '<br><span>followers</span>'
      following.innerHTML = data.following + '<br><span>following</span>'
      repo.innerHTML = data.public_repos + '<br><span>repository</span>'
      name.innerHTML = data.name
      bio.innerHTML = data.bio
    })

})
