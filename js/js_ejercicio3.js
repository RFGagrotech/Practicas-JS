const input = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
    
    let text = input.value.trim();

    //Para evitar existencia de notas "vacias"
    if (text === "") return;

    //Creación de lista
    let li = document.createElement("li");
    li.textContent = text;

    //Crear un botón para borrar (delete)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";

    //Darle la función de borrar al botón (delete)
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    //Añadir botón (delete) a cada li 
    li.appendChild(deleteBtn);

    //Añadir li a la lista
    list.appendChild(li);

    //Limpiar input
    input.value = "";
});