let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");

function obtenerValores() {
    let a = Number(num1.value.trim());
    let b = Number(num2.value.trim());

    //validar campos vacios o inválidos
    if (num1.value === "" || num2.value === "" || isNaN(a) || isNaN(b)) {
        resultado.textContent = "Introduce dos números válidos";
        return null;
    }

    return {a,b};
}

function mostrarResultado(valor) {
    resultado.textContent = `Resultado: ${valor}`;
}

//Sumar
document.getElementById("sumar").addEventListener("click", () => {
    let valores = obtenerValores();
    if (!valores) return;

    mostrarResultado(valores.a + valores.b);
});

//Restar
document.getElementById("restar").addEventListener("click", () => {
    let valores = obtenerValores();
    if (!valores) return;

    mostrarResultado(valores.a - valores.b);
});

//Multiplicación
document.getElementById("multiplicar").addEventListener("click", () => {
    let valores = obtenerValores();
    if (!valores) return;

    mostrarResultado(valores.a * valores.b);
});

//División
document.getElementById("dividir").addEventListener("click", () => {
    let valores = obtenerValores();
    if (!valores) return;

    if (valores.b === 0) {
        resultado.textContent = "No se puede dividir entre 0";
        return;
    }

    mostrarResultado(valores.a / valores.b);
})
