const bangla = document.getElementById("bangla");
const english = document.getElementById("english");
const math = document.getElementById("math");

const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const b = Number(bangla.value);
    const e = Number(english.value);
    const m = Number(math.value);

    const total = b + e + m;
    const average = total / 3;

    let grade = "";

    if (average >= 80) {
        grade = "A+";
    }
    else if (average >= 70) {
        grade = "A";
    }
    else if (average >= 60) {
        grade = "A-";
    }
    else if (average >= 50) {
        grade = "B";
    }
    else if (average >= 40) {
        grade = "C";
    }
    else if (average >= 33) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    result.innerHTML = `
        Total: ${total} <br>
        Average: ${average.toFixed(2)} <br>
        Grade: ${grade}
    `;

});