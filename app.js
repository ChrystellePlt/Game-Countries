const startButton = document.querySelector('.start-button');
const gameStart = document.querySelector('#game-start');

startButton.addEventListener('click', function(event){
  gameStart.classList.remove('is-open');
})

// display flagscrandomly

let countryName = document.querySelector('.country-name');
let flags = document.querySelectorAll('.flag');
let flagsNumber = [];

countryName.innerHTML = flagsData[Math.floor(Math.random() * (flagsData.length + 1))].name;

let i = 0;

flags.forEach(function(flag) {
  flagsNumber.push(i);
  i++;
})

let randomFlags = [];

flags.forEach(function(flag) {
  let randomNumber = flagsData[Math.floor(Math.random() * (flagsData.length + 1))];
  if (randomFlags.length === 0) {
    randomFlags.push(randomNumber);
  } else {
    if (!randomFlags.includes(randomNumber)) {
        randomFlags.push(randomNumber);
    }
  }
})
