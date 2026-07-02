const password = document.getElementById("password");
const checkbox = document.getElementById("showPassword");

checkbox.addEventListener("change", function () {

    if (checkbox.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }

});