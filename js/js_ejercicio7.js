let lengthInput = document.getElementById("length");
let button = document.getElementById("generate");
let result = document.getElementById("result");

//Establezco carácteres permitidos
const chars = 
"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";

button.addEventListener("click", () => {
    let length = Number(lengthInput.value.trim());

    //Validación
    if (lengthInput.value === "" || isNaN(length) || length < 4){
        result.textContent = "La longitud debe ser mayor o igual a 4";
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    result.textContent = `Contraseña: ${password}`;
});