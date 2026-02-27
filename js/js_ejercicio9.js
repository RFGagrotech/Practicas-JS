// Elementos del DOM
let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");
let clearCompletedBtn = document.getElementById("clearCompleted");

// Clave de LocalStorage
let STORAGE_KEY = "task_v1";

// Helpers LocalStorage
function loadTasks() {
  let raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Estado
let tasks = loadTasks();

// UI
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    let span = document.createElement("span");
    span.textContent = task.text;
    span.style.textDecoration = task.completed ? "line-through" : "none";

    // Marcar como completa / no completa
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      span.style.textDecoration = task.completed ? "line-through" : "none";
      saveTasks(tasks);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
  });
}

// Añadir tarea
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskText = input.value.trim();
  if (taskText === "") return;

  let newTask = {
    id: (crypto.randomUUID && crypto.randomUUID()) || String(Date.now()),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks();

  input.value = "";
  input.focus();
});

// Limpiar completadas
clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks(tasks);
  renderTasks();
});

// Pintar al cargar
renderTasks();