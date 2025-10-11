// =============================
// СЕКЦІЯ ТА КОНТЕЙНЕР
// =============================
const section = document.createElement("section");
section.classList.add("dino-section");
document.body.appendChild(section);

const container = document.createElement("div");
container.classList.add("container");
section.appendChild(container);

// =============================
// ЗАГОЛОВОК ГРИ
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
  marginBottom: "36px" // відстань від заголовка до вікна гри
});
document.body.appendChild(title);

// =============================
// КОНТЕЙНЕР ДЛЯ ГРИ
// =============================
const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
document.body.appendChild(gameContainer);

Object.assign(gameContainer.style, {
  position: "relative",
  width: "606px", // ширина вікна гри
  height: "200px",
  margin: "0 auto",
  background: "#fff",
  overflow: "hidden",
  display: "block"
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
// ДИНОЗАВРИК
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
let speed = 6; // швидкість руху землі і кактусів

// =============================
// ЛОГІКА СТРИБКА
// =============================
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !isJumping && !gameOver) {
    isJumping = true;
    velocity = 14;
  }
  if (e.code === "Space" && gameOver) {
    window.location.reload();
  }
});

function updateJump() {
  if (isJumping) {
    jumpHeight += velocity;
    velocity -= 1.5; // гравітація
    if (jumpHeight <= 0) {
      jumpHeight = 0;
      isJumping = false;
    }
    dino.style.bottom = (20 + jumpHeight) + "px";
    dino.style.backgroundImage = "url('img/dino-s.jpg')"; // стоячий під час стрибка
  } else if (!gameOver) {
    // анімація бігу
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

  // частота спавну 0.6–1.6 сек
  const nextSpawn = Math.random() * 1000 + 600;
  setTimeout(createCactus, nextSpawn);
}

// =============================
// ТЕКСТ "GAME OVER"
// =============================
const gameOverDiv = document.createElement("div");
gameOverDiv.classList.add("game-over-div");
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
    // рух землі
    groundLeft -= speed;
    if (groundLeft <= -606) groundLeft = 0; // зациклювання
    ground.style.left = groundLeft + "px";

    // рух кактусів
    for (let i = 0; i < cactusList.length; i++) {
      const cactus = cactusList[i];
      const left = parseInt(cactus.style.left) - speed;
      cactus.style.left = left + "px";

      // видалення поза екраном
      if (left < -20) {
        gameContainer.removeChild(cactus);
        cactusList.splice(i, 1);
        i--;
        continue;
      }

      // перевірка зіткнення
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
// ПОЛОСОЧКА
// =============================
const bottomLine = document.createElement("div");
bottomLine.classList.add("bottom-line");
Object.assign(bottomLine.style, {
  width: "536px",
  height: "1px",
  backgroundColor: "#000",
  margin: "91px auto 0 auto" // відстань від землі до лінії
});
document.body.appendChild(bottomLine);

// =============================
// ЗАПУСК ГРИ
// =============================
createCactus();
gameLoop();
