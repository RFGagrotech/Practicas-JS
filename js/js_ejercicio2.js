const button = document.getElementById("countBtn");
const counterText = document.getElementById("counter");

let clicks = 0;

button.addEventListener("click", () => {
    clicks++;
    counterText.textContent = `Clics: ${clicks}`;
});

// Creo el botón de reset
const resetBtn = document.createElement("button");
//Escribo en el botón
resetBtn.textContent = "Reset"; 
//Añadir el boton al body
document.body.appendChild(resetBtn);
//Crear el evento del botón
resetBtn.addEventListener("click", () => {
    clicks = 0;
    counterText.textContent = `Clics: ${clicks}`;
})