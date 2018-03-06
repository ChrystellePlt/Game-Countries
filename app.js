const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.restart-button');
const gameStart = document.querySelector('#game-start');
const gameOver = document.querySelector('#game-over');
let livesCounter;

startButton.addEventListener('click', function(event) {
  gameStart.classList.remove('is-open');
  game();
})

restartButton.addEventListener('click', function(event) {
  location.reload();
})

// contains all the game
function game() {
  var timeLeft = 20;
  var timer = document.querySelector('.time');
  var timerId = setInterval(countdown, 1000);

// create an array of four random numbers between from 0 to 103 (number of flags)
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      gameOver.classList.add('is-open');
    } else {
      timer.innerHTML = '<span>' + timeLeft + '</span> s';
      timeLeft--;
    }
  }

  const colors = ['blue', 'red', 'yellow', 'green', 'orange', 'black'];
  const flagsImage = document.querySelectorAll('.flag > img');
  let colorIndex = 0;
  let countryName = document.querySelector('.country-name');

  displayFlags();

  function displayFlags() {
    let randomColor = colors[colorIndex];
    let flags = document.querySelectorAll('.flag');
    let randomFlags = [];

// create an array of four random numbers between from 0 to 103 (number of flags)
    while (randomFlags.length != flags.length) {
      let randomNb = Math.floor(Math.random() * flagsData.length);
      console.log(randomNb);
      let randomFlag = flagsData[randomNb];
      let randomFlagColors = randomFlag.colors;
      if (!randomFlags.includes(randomFlag) && randomFlagColors.includes(randomColor)) { //choice by color
        randomFlags.push(randomFlag);
      }
    }

    flags.forEach(function(flag) {
      if (flag.classList.contains('is-active')) {
        flag.classList.remove('is-active');
      }
    })

// specify src of image + code of the country for each flags
let index = 0;
    flagsImage.forEach(function(image) {
      let countryCode = (randomFlags[index].code).toLowerCase();
      image.setAttribute('src', `flags/${countryCode}.svg`);
      image.setAttribute('name', `${randomFlags[index].name}`);
      index++;
    })

    countryName.innerHTML = randomFlags[Math.floor(Math.random() * (randomFlags.length))].name; //display country name to find
    let flagPlayed = countryName.textContent;
  };

  let score = document.querySelector('.score');
  let scoreValue = 0;
  let lives = document.querySelectorAll('.lives > img');
  livesCounter = 0;

  flagsImage.forEach(function(image) {
    image.addEventListener('click', function(event) {
      let imageAttribute = image.getAttribute('name');
      if (imageAttribute === countryName.textContent) {
        scoreValue++;
        if (timeLeft < 28) {
          timeLeft += 3; //add 3sec to countdown
        } else {
          timeLeft += 30 - timeLeft; //max countdown set at 30sec
        }
        if (colorIndex < colors.length -1 ) {
          colorIndex++; //set the index of next common color
        } else {
          colorIndex = 0; //back to the first color
        }
        score.innerHTML = 'Your score : <strong>' + scoreValue + '</strong>';
        displayFlags();
      } else {
        let parent = event.target.parentElement;
        parent.classList.add('is-active');
        lives[livesCounter].classList.add('is-active');
        livesCounter++;
        if (livesCounter === 3) {
          clearTimeout(timerId);
          gameOver.classList.add('is-open');
        }
      }
    })
  })
}
