const button = document.getElementById("changeColor");

button.addEventListener("click", () => {
    //Generar un color aleatorio (RGB)
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${r}, ${g}, ${b})`;

    //Cambiar fondo
    document.body.style.backgroundColor = randomColor;
});