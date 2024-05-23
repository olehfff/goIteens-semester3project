const buttonPlayAgain = document.querySelector(".button");
console.log(buttonPlayAgain)

const numberGess = document.querySelector(".number");
console.log(numberGess)

function getRandomNumber() {return Math.round(Math.random() * (10 - 1) + 1)}
getRandomNumber()