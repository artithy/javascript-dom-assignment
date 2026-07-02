const button = document.getElementById("btn");
const code = document.getElementById("code");

button.addEventListener("click", function () {

    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

    document.body.style.background = gradient;

    code.textContent = `background: ${gradient};`;

});