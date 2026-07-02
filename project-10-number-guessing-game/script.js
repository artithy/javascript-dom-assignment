const guess = document.getElementById("guess");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

const randomNumber = Math.floor(Math.random() * 100) + 1;

button.addEventListener("click", function () {

    const userGuess = Number(guess.value);

    if (userGuess > randomNumber) {
        result.textContent = "Too High";
    }
    else if (userGuess < randomNumber) {
        result.textContent = "Too Low";
    }
    else {
        result.textContent = "Correct Answer";
    }

});