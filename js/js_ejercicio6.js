let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;

//Actualizar pantalla
function updateDisplay() {
    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    timer.textContent = `${h}:${m}:${s}`;
}

//iniciar
startBtn.addEventListener("click", () => {
    //Para evitar que se multipliquen los intervalos
    if (interval !== null) return;

    //Establezco el funcionamiento (loop)
    interval = setInterval(() =>{
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
});

//Pausar
pauseBtn.addEventListener("click", () =>{
    clearInterval(interval);
    interval = null;
});

//Reiniciar
resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;

    seconds = 0; 
    minutes = 0; 
    hours = 0; 

    updateDisplay();
});