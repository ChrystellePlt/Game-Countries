const startButton = document.querySelector('.start-button');
const gameStart = document.querySelector('#game-start');

startButton.addEventListener('click', function(event){
  gameStart.classList.remove('is-open');
})

// display flagscrandomly

let countryName = document.querySelector('.country-name');
let flags = document.querySelectorAll('.flag');

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



const flagsImage = document.querySelectorAll('.flag > img');
let index = 0;

flagsImage.forEach(function(image) {
  let countryCode = (randomFlags[index].code).toLowerCase();
  console.log(countryCode);
  image.setAttribute('src', `flags/${countryCode}.svg`);
  index++;
})

countryName.innerHTML = randomFlags[Math.floor(Math.random() * (randomFlags.length + 1))].name;
