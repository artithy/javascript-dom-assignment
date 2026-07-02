const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");

textInput.addEventListener("input", function () {

    if (textInput.value === "") {
        preview.textContent = "Type Something...";
    } else {
        preview.textContent = textInput.value;
    }

});