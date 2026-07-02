let count = 0;

const countDisplay = document.getElementById("count");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

decrementBtn.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});