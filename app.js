const startButton = document.querySelector('.start-button');
const gameStart = document.querySelector('#game-start');

startButton.addEventListener('click', function(event) {
  gameStart.classList.remove('is-open');
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
  console.log(randomFlags);

  let index = 0;
  flagsImage.forEach(function(image) {
    console.log(index);
    let countryCode = (randomFlags[index].code).toLowerCase();
    console.log(countryCode);
    image.setAttribute('src', `flags/${countryCode}.svg`);
    image.setAttribute('name', `${randomFlags[index].name}`);
    index++;
  })
  countryName.innerHTML = randomFlags[Math.floor(Math.random()*(randomFlags.length))].name;
};


// add eventListener on flags + add +1 to score if match
flagsImage.forEach(function(image) {
  image.addEventListener('click', function(event) {
    let targetNameAttribute = event.target.getAttribute('name');
    if (targetNameAttribute === countryName.textContent) {
      scoreValue++;
      score.innerHTML = 'Your score : <strong>' + scoreValue + '</strong>';
      displayFlags();
    }
  })
})
