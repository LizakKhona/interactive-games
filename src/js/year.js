


const wrap = document.querySelector('.js-year');


 const title = document.createElement('h2');
title.textContent = 'Перевір в який рік ти народися';
title.classList.add('year-title');
wrap.append(title)

const input = document.createElement('input');
input.classList.add('input__center__section1');
input.placeholder = 'Введіть рік народження';
input.setAttribute('type', 'text');


const luppaEllem = document.createElement('img');
luppaEllem.src = './img/lupa.png.png';
luppaEllem.alt = 'Lupa';
luppaEllem.classList.add('luppa-image');



const button = document.createElement('button');
button.classList.add('button__center__section1');
button.setAttribute('type', 'button');
button.appendChild(luppaEllem);




const form = document.querySelector('.form__center__section1');
form.appendChild(input);
form.appendChild(button);




const inputContainer = document.querySelector('.input__container');
inputContainer.appendChild(input);
inputContainer.appendChild(button);


const resultText = document.createElement('p');
resultText.classList.add('p__center__result');
form.appendChild(resultText);

wrap.append(form);

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

button.addEventListener('click', () => {
  const value = input.value.trim();

  if (/^\d{4}$/.test(value)) {
    const year = parseInt(value, 10);
    if (isLeapYear(year)) {
      resultText.textContent = 'Ви народилися у високосний рік!';
      resultText.style.color = 'green';
    } else {
      resultText.textContent = 'Ви народилися не у високосний рік.';
      resultText.style.color = 'red';
    }
  } else {
    resultText.textContent = 'Будь ласка, введіть коректний 4-значний рік.';
    resultText.style.color = 'black';
  }
});
