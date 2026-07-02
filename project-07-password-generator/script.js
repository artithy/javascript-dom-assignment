const password = document.getElementById("password");
const button = document.getElementById("generateBtn");

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

button.addEventListener("click", function () {

    let randomPassword = "";

    for (let i = 0; i < 8; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length);

        randomPassword += characters[randomIndex];
    }

    password.value = randomPassword;

});