// === ФУНКЦИЯ СОЗДАНИЯ ХЕДЕРА ===
function createHeader(userName) {
  const header = document.createElement("header");

  // ЛОГО
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  logoDiv.innerHTML = `<img src="./icons/full-logo.svg" alt="Logo">`;
  header.appendChild(logoDiv);

  // НАВИГАЦИЯ
  const nav = document.createElement("nav");

  const interactiveBtn = document.createElement("button");
  interactiveBtn.innerHTML = `Інтерактив <img src="./icons/dropdown.svg" alt="▼">`;

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  dropdown.innerHTML = `
    <button>Числовий</button>
    <button>Ігровий</button>
    <button>Ознайомчий</button>
  `;
  interactiveBtn.appendChild(dropdown);
  interactiveBtn.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  const teamBtn = document.createElement("button");
  teamBtn.textContent = "Наша команда";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Контакти";

  nav.append(interactiveBtn, teamBtn, contactBtn);

  // ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ
  const themeToggle = document.createElement("div");
  themeToggle.classList.add("theme-toggle");
  themeToggle.innerHTML = `
    <div class="slider">
      <div class="circle">
        <img src="./icons/sun.svg" alt="day" class="icon sun">
        <img src="./icons/mond.svg" alt="night" class="icon moon">
      </div>
    </div>
  `;

  // Проверяем сохранённую тему
  if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.querySelector(".circle").style.transform = "translateX(26px)";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const circle = themeToggle.querySelector(".circle");
    if(document.body.classList.contains("dark")) {
      circle.style.transform = "translateX(26px)";
      localStorage.setItem("theme", "dark");
    } else {
      circle.style.transform = "translateX(0)";
      localStorage.setItem("theme", "light");
    }
  });

  // ПРИВЕТСТВИЕ
  const greet = document.createElement("div");
  greet.textContent = `Вітаємо, ${userName}!`;

  header.append(nav, themeToggle, greet);
  document.body.prepend(header);
}

// === модаЛЬНОЕ ОКНО=
function showWelcome() {
  const overlay = document.createElement("div");
  overlay.classList.add("welcome-overlay");

  const box = document.createElement("div");
  box.classList.add("welcome-box");

  box.innerHTML = `
    <button class="close-btn">
      <img src="./icons/x.svg" alt="x" class="header-x">
    </button>
    <h2 class="modal-title">Привіт!<br>
Ви потрапили на сайт інтерактивних ігор та завдань<br>
Надіємось, що вам сподобається і ви отримаєте позитивні емоції!<br>
Бажаємо Вам гарно провести час!</h2>
    <p class="modal-text">Введіть своє ім’я:</p>
    <input type="text" id="userNameInput" placeholder="Ваше ім’я...">
    <button id="saveName">Зберегти</button>
    <img src="./icons/sword.svg" alt="sword" class="modal-icon-lt">
    <img src="./icons/puzzle.svg" alt="puzzle" class="modal-icon-lb">
    <img src="./icons/tic-tac-toe.svg" alt="tic-tac-toe" class="modal-icon-rb">
    <img src="./icons/game-development.svg" alt="game-development" class="modal-icon-rt">
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);


  box.querySelector("#userNameInput").focus();

 
  box.querySelector(".close-btn").onclick = () => overlay.remove();

 
  box.querySelector("#saveName").onclick = () => {
    const name = box.querySelector("#userNameInput").value.trim();
    if (name) {
      localStorage.setItem("userName", name); 
      overlay.remove(); 
      const existingHeader = document.querySelector("header"); 
      if(existingHeader) existingHeader.remove();
      createHeader(name); 
    }
  };
}

// === ЗАПУСК ===
showWelcome();
