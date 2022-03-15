const randomNumber = document.querySelector(".randomNumber");
const guessNumber = document.querySelector(".guessNumber");
const gameForm = document.querySelector(".game-form");

const result = document.querySelector(".result");
const showResult = document.querySelector(".showResult");

function inputRandomNumber(event) {
  const random1 = parseInt(randomNumber.value);
  const guess = parseInt(guessNumber.value);
  const machineNumber = Math.round(Math.random() * random1);
  event.preventDefault();

  if (guess === machineNumber) {
    result.innerHTML = `your chose: ${guess}, the machine chose: ${machineNumber}`;
    showResult.innerHTML = "You Win!";
  } else {
    result.innerHTML = `your chose: ${guess}, the machine chose: ${machineNumber}`;
    showResult.innerHTML = "You lost!";
  }
}

gameForm.addEventListener("submit", inputRandomNumber);
