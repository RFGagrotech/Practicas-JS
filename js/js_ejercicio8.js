let text = document.getElementById("text");
let chars = document.getElementById("chars");
let words = document.getElementById("words");

text.addEventListener("input", () => {
    let value = text.value; 

    // Contar carácteres (sin espacios ni saltos)
    let charCount = value.replace(/\s/g, "").length;

    //Contar palabras
    let wordCount = value.trim() === ""
    ? 0
    : value.trim().split(/\s+/).length;

    chars.textContent = `Carácteres: ${charCount}`;
    words.textContent = `Palabras: ${wordCount}`;
});