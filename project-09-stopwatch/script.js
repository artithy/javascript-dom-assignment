const time = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let timer;

startBtn.addEventListener("click", function () {

    clearInterval(timer);

    timer = setInterval(function () {
        seconds++;
        time.textContent = `${seconds} Seconds`;
    }, 1000);

});

stopBtn.addEventListener("click", function () {
    clearInterval(timer);
});

resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    seconds = 0;
    time.textContent = "0 Seconds";
});