const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.restart-button');
const gameStart = document.querySelector('#game-start');
const gameOver = document.querySelector('#game-over');
var timeLeft = 20;

startButton.addEventListener('click', function(event) {
  gameStart.classList.remove('is-open');
  var timer = document.querySelector('.time');

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      gameOver.classList.add('is-open');
    } else {
      timer.innerHTML = '<span>' + timeLeft + '</span> s';
      timeLeft--;
    }
  }
})

const score = document.querySelector('.score');
let scoreValue = document.querySelector('.score strong').textContent;

// display flags randomly

let countryName = document.querySelector('.country-name');

const flagsImage = document.querySelectorAll('.flag > img');

displayFlags();

function displayFlags() {
  let flags = document.querySelectorAll('.flag');
  let randomFlags = [];

  while (randomFlags.length != flags.length) { // create an array of four random numbers between from 0 to 103 (which is the number of flags)
    let randomNumber = flagsData[Math.floor(Math.random()*(flagsData.length + 1))];
    if (!randomFlags.includes(randomNumber)) {
        randomFlags.push(randomNumber);
      }
  }

  let index = 0;
  flags.forEach(function(flag){
    if (flag.classList.contains('is-active')) {
     flag.classList.remove('is-active');
}
  })
  flagsImage.forEach(function(image) {
    let countryCode = (randomFlags[index].code).toLowerCase();
    image.setAttribute('src', `flags/${countryCode}.svg`);
    image.setAttribute('name', `${randomFlags[index].name}`);
    index++;
  })
  countryName.innerHTML = randomFlags[Math.floor(Math.random()*(randomFlags.length))].name;
};

let lives = document.querySelectorAll('.lives > img');
let counter = 0;
// add eventListener on flags + add +1 to score if match
flagsImage.forEach(function(image) {
  image.addEventListener('click', function(event) {
    let imageAttribute = image.getAttribute('name');
    if (imageAttribute === countryName.textContent) {
      scoreValue++;
      timeLeft += 3;
      score.innerHTML = 'Your score : <strong>' + scoreValue + '</strong>';
      displayFlags();
    } else {
      let parent = event.target.parentElement;
      parent.classList.add('is-active');
      lives[counter].classList.add('is-active');
      counter++;
      if (counter === 3) {
        gameOver.classList.add('is-open');
      }
    }
  })
})
