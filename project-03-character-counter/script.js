const text = document.getElementById("text");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

text.addEventListener("input", function () {

    const value = text.value;

    // Character Count
    charCount.textContent = value.length;

    // Word Count
    const words = value.trim();

    if (words === "") {
        wordCount.textContent = 0;
    } else {
        wordCount.textContent = words.split(/\s+/).length;
    }

});