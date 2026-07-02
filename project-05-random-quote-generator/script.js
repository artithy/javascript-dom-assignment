const quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Dream big and work hard.",
    "Success comes with patience.",
    "Every day is a new opportunity."
];

const quote = document.getElementById("quote");
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[randomIndex];

});