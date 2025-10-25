// =============================
// СТВОРЕННЯ СЕКЦІЇ
// =============================

const section = document.createElement("section");
section.className = "numbers-section";

// шукаємо секцію football
const footballSection = document.querySelector(".football-section");

// якщо football знайдено — вставляємо після неї
if (footballSection && footballSection.parentNode) {
footballSection.parentNode.insertBefore(section, footballSection.nextSibling);
} else {
// якщо ні — додаємо в кінець сторінки
document.body.appendChild(section);
}

Object.assign(section.style, {
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
// height: "100vh",
fontFamily: "var(--font-family)"
});

// =============================
// ГОЛОВНИЙ КОНТЕЙНЕР
// =============================

const container = document.createElement("div");
container.className = "container";
section.appendChild(container);

Object.assign(container.style, {
display: "flex",
flexDirection: "column",
alignItems: "center"
});

// =============================
// ЗАГОЛОВОК
// =============================

const title = document.createElement("h2");
title.className = "title";
title.textContent = "Введіть 3 числа";

Object.assign(title.style, {
fontWeight: "400",
fontSize: "16px",
color: "#000",
textAlign: "center",
marginBottom: "36px"
});

container.appendChild(title);

// =============================
// КОНТЕЙНЕР ДЛЯ ІНПУТІВ
// =============================

const inputsContainer = document.createElement("div");
inputsContainer.className = "inputs-container";

Object.assign(inputsContainer.style, {
display: "flex",
justifyContent: "center",
gap: "38px",
marginBottom: "36px"
});

container.appendChild(inputsContainer);

// =============================
// СТВОРЕННЯ ІНПУТІВ
// =============================

const inputs = [];

for (let i = 0; i < 3; i++) {
const input = document.createElement("input");
input.className = "number-input";
input.type = "number";
input.placeholder = "Введіть число";

Object.assign(input.style, {
fontFamily: "var(--font-family)",
fontWeight: "400",
fontSize: "12px",
color: "#7e7e7e",
borderRadius: "20px",
padding: "10px 20px",
boxShadow: "3px 3px 0 0 rgba(0, 0, 0, 0.25)",
background: "#d7d7d7",
border: "none",
outline: "none",
textAlign: "center"
});

inputsContainer.appendChild(input);
inputs.push(input);
}

// =============================
// ТЕКСТ З РЕЗУЛЬТАТОМ
// =============================

const resultText = document.createElement("p");
resultText.className = "result-text";
resultText.textContent = "Найбільше число, яке ви ввели - ";

Object.assign(resultText.style, {
fontFamily: "var(--font-family)",
fontWeight: "400",
fontSize: "16px",
color: "#000",
textAlign: "center",
marginBottom: "36px"
});

container.appendChild(resultText);

// =============================
// ОБРОБКА ВВЕДЕННЯ ЧИСЕЛ
// =============================

inputs.forEach(input => {
input.addEventListener("input", () => {
const values = inputs.map(inp => parseFloat(inp.value)).filter(val => !isNaN(val));

if (values.length === 3) {
  const max = Math.max(...values);
  resultText.textContent = `Найбільше число, яке ви ввели - ${max}`;
} else {
  resultText.textContent = "Найбільше число, яке ви ввели - ";
}


});
});

// =============================
// ГОРИЗОНТАЛЬНА ЛІНІЯ
// =============================

const line = document.createElement("div");
line.className = "bottom-line";

Object.assign(line.style, {
width: "536px",
height: "1px",
backgroundColor: "#000"
});

container.appendChild(line);