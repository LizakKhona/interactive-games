const container = document.createElement('div');
container.className = 'game-container';

const title = document.createElement('h2');
title.className = 'game-title';
title.textContent = 'Вгадай число, яке загадав комп’ютер';

const searchBox = document.createElement('div');
searchBox.className = 'search-box';

const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Введіть число';
input.id = 'guessInput';
input.className = 'guess-input';

const button = document.createElement('button');
button.className = 'search-button';
searchBox.appendChild(input);
searchBox.appendChild(button);

const result = document.createElement('p');
result.id = 'result';
result.className = 'result-text';

const row = document.createElement('div');
row.className = 'row-box';
row.appendChild(searchBox);
row.appendChild(result);

container.appendChild(title);
container.appendChild(row);
document.body.appendChild(container);

// Логiка гри
const secretNumber = Math.floor(Math.random() * 10) + 1;

button.addEventListener('click', () => {
  const userGuess = Number(input.value);
  if (userGuess === secretNumber) {
    result.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
    result.classList.add('success');
    result.classList.remove('error');
  } else {
    result.textContent = 'Ні, спробуйте ще раз!';
    result.classList.add('error');
    result.classList.remove('success');
  }
});
