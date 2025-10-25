// === ФУНКЦИЯ СОЗДАНИЯ ХЕДЕРА ===
function createHeader(userName) {
  const header = document.createElement('header');
  // document.body.prepend(header)
  const container = document.createElement('div');
  container.classList.add('container');
  container.classList.add('header-container');
  header.appendChild(container);
  // ЛОГО
  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo');
  logoDiv.innerHTML = `<svg height="73" width="175">
    <use href="./icons/logo-footer.svg"></use>
   </svg>`;
  // container.appendChild(logoDiv);

  // НАВИГАЦИЯ
  const nav = document.createElement('nav');

  const interactiveBtn = document.createElement('button');
  interactiveBtn.innerHTML = `Інтерактив <img class="arrow-header" height="9" width="5" src="./img/arrow.jpg">
   </img>`;

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');
  dropdown.innerHTML = `
    <button class="dropdown-button">Числовий</button>
    <button class="dropdown-button">Ігровий</button>
    <button class="dropdown-button">Ознайомчий</button>
  `;
  const dropdownButtons = dropdown.querySelectorAll('.dropdown-button');
  interactiveBtn.appendChild(dropdown);
  interactiveBtn.addEventListener('click', () => {
    dropdown.style.display =
      dropdown.style.display === 'block' ? 'none' : 'block';
  });

  const teamBtn = document.createElement('button');
  teamBtn.textContent = 'Наша команда';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Контакти';

  nav.append(interactiveBtn, teamBtn, contactBtn);

  // ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ
  const themeToggle = document.createElement('div');
  themeToggle.classList.add('theme-toggle');
  themeToggle.innerHTML = `
    <div class="slider">
      <div class="circle">
        <img src="./icons/sun.svg" alt="day" class="icon sun">
        <img src="./icons/mond.svg" alt="night" class="icon moon">
      </div>
    </div>
  `;

  // Проверяем сохранённую тему
  if (localStorage.getItem('theme') === 'dark') {
    header.classList.add('dark');
    themeToggle.querySelector('.circle').style.transform = 'translateX(26px)';
  }

  const greet = document.createElement('div');
  greet.classList.add('greet');
  greet.textContent = `Вітаємо, ${userName}!`;
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer');

  themeToggle.addEventListener('click', () => {
    header.classList.toggle('dark');
    // body.style.backgroundColor = 'grey';
    const circle = themeToggle.querySelector('.circle');
    if (header.classList.contains('dark')) {
      circle.style.transform = 'translateX(26px)';
      circle.style.backgroundColor = 'black';
      localStorage.setItem('theme', 'dark');
      greet.style.color = 'white';
      // logoDiv.style.backgroundColor = 'white';
      // body.style.backgroundColor = "grey"
      sections.forEach(section => (section.style.backgroundColor = 'grey'));
      footer.style.backgroundColor = 'grey';

      const htmlElements = ['p', 'output', 'h1', 'h2', 'h3', 'li', 'a'];
      htmlElements.map(elem => {
        const items = document.querySelectorAll(elem);
        addClass(items);

        // dropdownButtons.forEach(button => button.style.color = "lighgray");
      });
    } else {
      circle.style.transform = 'translateX(0)';
      circle.style.backgroundColor = 'white';
      localStorage.setItem('theme', 'light');
      greet.style.color = 'black';
      // logoDiv.style.backgroundColor = 'white';
      sections.forEach(section => (section.style.backgroundColor = 'white'));
      // body.style.backgroundColor = 'white';
      footer.style.backgroundColor = 'white';

      const htmlElements = ['p', 'output', 'h1', 'h2', 'h3', 'li', 'a'];
      htmlElements.map(elem => {
        const items = document.querySelectorAll(elem);
        removeClass(items);
      });

      // dropdownButtons.forEach(button => button.style.color = "black");
    }

    function addClass(items) {
      items.forEach(item => item.classList.add('dark-theme-font'));
    }

    function removeClass(items) {
      items.forEach(item => item.classList.remove('dark-theme-font'));
    }
  });


  // ПРИВЕТСТВИЕ
  const box1 = document.createElement('div');
  box1.classList.add('box1');
  box1.append(logoDiv, nav);

  const box2 = document.createElement('div');
  box2.classList.add('box2');
  box2.append(themeToggle, greet);
  container.append(box1, box2);
  // container.append(nav, themeToggle, greet);
  document.body.prepend(header);
}

// === модаЛЬНОЕ ОКНО=
function showWelcome() {
  const overlay = document.createElement('div');
  overlay.classList.add('welcome-overlay');

  const box = document.createElement('div');
  box.classList.add('welcome-box');

  box.innerHTML = `
    <button class="close-btn">
      <img src="./icons/x.svg" alt="x" class="header-x">
    </button>
    <p class="modal-title">Привіт!<br>
Ви потрапили на сайт інтерактивних ігор та завдань<br>
Надіємось, що вам сподобається і ви отримаєте позитивні емоції!<br>
Бажаємо Вам гарно провести час!</p>
    <p class="modal-text">Введіть своє ім’я:</p>
    <input type="text" id="userNameInput" placeholder="Ваше ім’я..." class="modal-input">
    <button id="saveName">Зберегти</button>
    <img src="./icons/sword.svg" alt="sword" class="modal-icon-lt">
    <img src="./icons/puzzle.svg" alt="puzzle" class="modal-icon-lb">
    <img src="./icons/tic-tac-toe.svg" alt="tic-tac-toe" class="modal-icon-rb">
    <img src="./icons/game-development.svg" alt="game-development" class="modal-icon-rt">
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  box.querySelector('#userNameInput').focus();

  box.querySelector('.close-btn').onclick = () => overlay.remove();

  box.querySelector('#saveName').onclick = () => {
    const name = box.querySelector('#userNameInput').value.trim();
    if (name) {
      localStorage.setItem('userName', name);
      overlay.remove();
      const existingHeader = document.querySelector('header');
      if (existingHeader) existingHeader.remove();
      createHeader(name);
    }
  };
}

// === ЗАПУСК ===
showWelcome();