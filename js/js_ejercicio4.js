const input = document.getElementById("search");
const list = document.getElementById("list");

//Creo una lista predefinida como la del ejemplo
const animals = ["Perro", "Gato", "Pez", "Castór", "Rata", "Ardilla", "Ornitorrinco"];

//Mostrar lista inicial
function renderList(items, searchText = "") {
    list.innerHTML = "";

    items.forEach(item => {
        let li = document.createElement("li");

        //Si hay texto escrito -> subrayar la coincidencia
        if (searchText !=="") {
            let regex = new RegExp(`(${searchText})`, "gi");
            li.innerHTML = item.replace(regex,"<u>$1</u>");
        } else {
            li.textContent = item;
        }

        list.appendChild(li);
    });
}

//mostrar lista inicial
renderList(animals);

// evento mientras escribe
input.addEventListener("input", () => {
    let text = input.value.trim().toLowerCase();

    let filtered = animals.filter(animal =>
        animal.toLowerCase().includes(text)
    );

    renderList(filtered); 
});