const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("add").addEventListener("click", function () {

    result.textContent = "Result: " + (Number(num1.value) + Number(num2.value));

});

document.getElementById("subtract").addEventListener("click", function () {

    result.textContent = "Result: " + (Number(num1.value) - Number(num2.value));

});

document.getElementById("multiply").addEventListener("click", function () {

    result.textContent = "Result: " + (Number(num1.value) * Number(num2.value));

});

document.getElementById("divide").addEventListener("click", function () {

    if (Number(num2.value) === 0) {
        result.textContent = "Cannot divide by zero";
    } else {
        result.textContent = "Result: " + (Number(num1.value) / Number(num2.value));
    }

});