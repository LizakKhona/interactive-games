const wrap = document.querySelector('.js-year');
console.log(wrap);

const title = document.createElement('h1');
title.classList.add('year-title');
title.textContent = 'Перевір в який рік ти народився';
console.log(title);

const input = document.createElement('input')
input.setAttribute("type", "text")
input.placeholder = 'Введіть рік народження';
input.classList.add('year-input')
console.log(input);

const result = document.createElement('p');
result.classList.add('year-output')
result.textContent = '';

const button = document.createElement('button')
button.classList.add('button-year');
button.setAttribute("type" , "button")

wrap.append(title , input , result)