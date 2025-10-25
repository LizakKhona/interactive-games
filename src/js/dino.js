// =============================
// СЕКЦІЯ ТА КОНТЕЙНЕР
// =============================
const section = document.createElement("section");
section.classList.add("dino-section");

// =============================
// КОНТЕЙНЕР СЕКЦІЇ
// =============================
const container = document.createElement("div");
container.classList.add("container");
section.appendChild(container);

Object.assign(container.style, {
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
textAlign: "center",
width: "100%",
});

// =============================
// ЗАГОЛОВОК
// =============================
const title = document.createElement("h2");
title.textContent = "Google динозавр";
Object.assign(title.style, {
textAlign: "center",
fontFamily: "var(--font-family)",
fontWeight: "400",
fontSize: "16px",
color: "#000",
marginTop: "20px",
marginBottom: "36px"
});
container.appendChild(title);

// =============================
// КОНТЕЙНЕР ДЛЯ ГРИ
// =============================
const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
container.appendChild(gameContainer);

Object.assign(gameContainer.style, {
position: "relative",
width: "606px",
height: "200px",
background: "#fff",
overflow: "hidden",
display: "block",
margin: "0 auto"
});

// =============================
// ЗЕМЛЯ
// =============================
const ground = document.createElement("div");
ground.classList.add("game-ground");
gameContainer.appendChild(ground);

Object.assign(ground.style, {
width: "1098px",
height: "20px",
background: "url('img/ground.png') repeat-x",
position: "absolute",
bottom: "0px",
left: "0px",
zIndex: "1"
});

let groundLeft = 0;

// =============================
// ДИНОЗАВР
// =============================
const dino = document.createElement("div");
dino.classList.add("game-dino-character");
gameContainer.appendChild(dino);

Object.assign(dino.style, {
position: "absolute",
left: "60px",
bottom: "20px",
width: "40px",
height: "40px",
backgroundImage: "url('img/dino-s.jpg')",
backgroundSize: "cover",
zIndex: "2"
});

let runFrame = 0;
let runAnimTimer = 0;

// =============================
// ОСНОВНІ ЗМІННІ
// =============================
let isJumping = false;
let jumpHeight = 0;
let velocity = 0;
let gameOver = false;
let speed = 6;

// =============================
// ЛОГІКА СТРИБКА
// =============================
document.addEventListener("keydown", (e) => {
const target = e.target;
const isTyping = target &&
(target.tagName === "INPUT" ||
target.tagName === "TEXTAREA" ||
target.isContentEditable);

if (e.code === "Space" && !isTyping) {
e.preventDefault();
if (!isJumping && !gameOver) {
isJumping = true;
velocity = 14;
} else if (gameOver) {
window.location.reload();
}
}
});

// =============================
// ФУНКЦІЯ ОНОВЛЕННЯ СТРИБКА
// =============================
function updateJump() {
if (isJumping) {
jumpHeight += velocity;
velocity -= 1.5;
if (jumpHeight <= 0) {
jumpHeight = 0;
isJumping = false;
}
dino.style.bottom = 20 + jumpHeight + "px";
dino.style.backgroundImage = "url('img/dino-s.jpg')";
} else if (!gameOver) {
runAnimTimer++;
if (runAnimTimer % 6 === 0) {
runFrame = 1 - runFrame;
dino.style.backgroundImage = runFrame
? "url('img/dino-l.jpg')"
: "url('img/dino-r.jpg')";
}
}
}

// =============================
// КАКТУСИ
// =============================
const cactusList = [];

function createCactus() {
if (gameOver) return;

const cactus = document.createElement("div");
cactus.classList.add("game-cactus");
gameContainer.appendChild(cactus);

Object.assign(cactus.style, {
width: "20px",
height: "40px",
background: "url('img/cactus.jpg') center/cover no-repeat",
position: "absolute",
bottom: "10px",
left: "606px",
zIndex: "2"
});

cactusList.push(cactus);

const nextSpawn = Math.random() * 1000 + 600;
setTimeout(createCactus, nextSpawn);
}

// =============================
// ТЕКСТ "GAME OVER"
// =============================
const gameOverDiv = document.createElement("div");
gameOverDiv.textContent = "Game Over";
Object.assign(gameOverDiv.style, {
position: "absolute",
left: "50%",
top: "50%",
transform: "translate(-50%, -50%)",
fontFamily: "var(--font-family)",
fontWeight: "400",
fontSize: "16px",
color: "#000",
display: "none",
zIndex: "10",
userSelect: "none",
pointerEvents: "none",
textAlign: "center"
});
gameContainer.appendChild(gameOverDiv);

function showGameOver() {
gameOverDiv.style.display = "block";
}

// =============================
// ГОЛОВНИЙ ЦИКЛ ГРИ
// =============================
function gameLoop() {
if (!gameOver) {
groundLeft -= speed;
if (groundLeft <= -606) groundLeft = 0;
ground.style.left = groundLeft + "px";

for (let i = 0; i < cactusList.length; i++) {
  const cactus = cactusList[i];
  const left = parseInt(cactus.style.left) - speed;
  cactus.style.left = left + "px";

  if (left < -20) {
    gameContainer.removeChild(cactus);
    cactusList.splice(i, 1);
    i--;
    continue;
  }

  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();
  if (
    dinoRect.left < cactusRect.right &&
    dinoRect.right > cactusRect.left &&
    dinoRect.bottom > cactusRect.top + 10 &&
    dinoRect.top < cactusRect.bottom
  ) {
    gameOver = true;
    dino.style.backgroundImage = "url('img/dino-d.jpg')";
    showGameOver();
  }
}

updateJump();
requestAnimationFrame(gameLoop);


}
}

// =============================
// ВСТАВКА СЕКЦІЇ ПЕРЕД FOOTBALL
// =============================
const footballSection = document.querySelector(".football-section");
footballSection.parentNode.insertBefore(section, footballSection);

// =============================
// ЗАПУСК ГРИ
// =============================
createCactus();
gameLoop();