let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
let guesses = [];

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  let finalOutput = document.querySelector(".final-output");
  if (guess > 0 && guess <= 100 && guesses.length <= 6) {
    if (guesses.length == 6) {
      finalOutput.value = `You ran out of tries, ${
        6 - guesses.length
      } left! New game?`;
    } else if (guess > randomNumber) {
      guesses.push(guess);
      finalOutput.value = `Number is too high ${6 - guesses.length} left!`;
    } else if (guess < randomNumber) {
      guesses.push(guess);
      finalOutput.value = `Number is too low ${6 - guesses.length} left!`;
    } else if (guess == randomNumber) {
      guesses.push(guess);
      if (guesses.length == 1) {
        finalOutput.value = `Guess is correct. You win! it took you ${guesses.length} try So lucky!!!`;
      } else {
        finalOutput.value = `Guess is correct. You win! it took you ${guesses.length} tries!`;
      }
    }
  } else {
    // let finalOutput = document.querySelector(".final-output");
    finalOutput.value = "Please enter a number between 1 and 100";
  }
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  let guess = document.querySelector(".inputs-Values");
  guess.value = "";
  guesses = [];
  document.querySelector(".final-output").value =
    "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector(".btnNewGame").addEventListener("click", newGame);

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
