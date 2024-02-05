// generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};
let intervalId;
function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
  console.log(randomColor());
}
const startChaningColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 2000)
  }
}
function stopChaningColor() {
  clearInterval(intervalId)
  intervalId = null
  console.log('stopped')
}
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', startChaningColor);
stop.addEventListener('click', stopChaningColor);