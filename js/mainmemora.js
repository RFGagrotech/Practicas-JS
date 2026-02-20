const board = document.getElementById("board");
const btnNew = document.getElementById("newGame");
const movesEl = document.getElementById("moves");
const pairsEl = document.getElementById("pairs");

// Botones de dificultad
const levelButtons = document.querySelectorAll(".difficulty button");

// Config de niveles
const LEVELS = {
  easy: { rows: 4, cols: 2 },
  medium: { rows: 5, cols: 4 },
  hard: { rows: 5, cols: 6 },
};

// Nivel por defecto
let currentLevel = "easy";

let firstCard = null;
let secondCard = null;
let lock = false;

let moves = 0;
let matchedPairs = 0;
let totalPairs = 0;

// Click en botones de dificultad => cambia nivel y reinicia
levelButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLevel = btn.dataset.level;
    startGame();
  });
});

// Nueva partida => reinicia con el nivel actual
btnNew.addEventListener("click", startGame);

// Arranca al cargar
startGame();

function startGame() {
  const { rows, cols } = LEVELS[currentLevel];
  const total = rows * cols;

  moves = 0;
  matchedPairs = 0;
  totalPairs = total / 2;
  updateHUD();

  firstCard = null;
  secondCard = null;
  lock = false;

  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  const colors = makePairs(totalPairs);
  const deck = shuffle([...colors, ...colors]);

  deck.forEach((color, idx) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.type = "button";
    btn.dataset.color = color;
    btn.style.setProperty("--color", color);
    btn.setAttribute("aria-label", `Carta ${idx + 1}`);

    const label = document.createElement("span");
    label.textContent = "✓";
    btn.appendChild(label);

    btn.addEventListener("click", () => onCardClick(btn));
    board.appendChild(btn);
  });
}

function onCardClick(card) {
  if (lock) return;
  if (card.classList.contains("revealed")) return;
  if (card.classList.contains("matched")) return;

  reveal(card);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;
  updateHUD();

  const same = firstCard.dataset.color === secondCard.dataset.color;

  if (same) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedPairs++;
    updateHUD();
    resetPick();

    if (matchedPairs === totalPairs) {
      setTimeout(() => alert(`¡Ganaste! Movimientos: ${moves}`), 200);
    }
    return;
  }

  lock = true;
  setTimeout(() => {
    hide(firstCard);
    hide(secondCard);
    resetPick();
    lock = false;
  }, 700);
}

function reveal(card) {
  card.classList.add("revealed");
}

function hide(card) {
  card.classList.remove("revealed");
}

function resetPick() {
  firstCard = null;
  secondCard = null;
}

function updateHUD() {
  movesEl.textContent = `Movimientos: ${moves}`;
  pairsEl.textContent = `Parejas: ${matchedPairs}/${totalPairs}`;
}

function makePairs(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    const hue = Math.round((360 / n) * i);
    res.push(`hsl(${hue} 75% 55%)`);
  }
  return res;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}