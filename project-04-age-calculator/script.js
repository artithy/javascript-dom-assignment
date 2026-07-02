const dob = document.getElementById("dob");
const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const birthDate = new Date(dob.value);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    result.textContent = `Your Age: ${age} Years`;

});