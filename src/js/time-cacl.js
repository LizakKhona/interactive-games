const wrap = document.querySelector('.time');


// Title

const title = document.createElement('h2');
title.textContent = 'Калькулятор часу';
title.classList.add('time__title');
wrap.prepend(title);

const secondWrap = document.querySelector('.time-box')


// Input

const input = document.createElement('input');
input.classList.add('time-input');
input.placeholder = 'Введіть хвилини';
input.setAttribute('type', 'number');
input.setAttribute('id', 'minutes');
secondWrap.append(input)


// Image

const magnifyingGlass = document.createElement('img');
magnifyingGlass.src = './img/magnifiyng-glass.png';
magnifyingGlass.alt = 'magnifiyng glass';
magnifyingGlass.classList.add('magnifying-glass');


// Button

const button = document.createElement('button');
button.classList.add('time-btn');
button.setAttribute('type', 'button');
button.setAttribute('id', 'timeBtn');
button.appendChild(magnifyingGlass);
secondWrap.append(button)

const decoration = document.createElement('p');
decoration.classList.add('decoration');
decoration.textContent = '..........................';
secondWrap.appendChild(decoration);




const result = document.createElement('output');
result.classList.add('time-result');
result.textContent = '0 дн. 00:00:00';
result.setAttribute('id', 'timeResult');
secondWrap.appendChild(result);




document.getElementById('timeBtn').addEventListener('click', () => {
  const m = parseInt(document.getElementById('minutes').value, 10);
  const out = document.getElementById('timeResult');

  if (isNaN(m)) {
    out.textContent = 'Введіть хвилини';
    return;
  }

  const totalSeconds = m * 60;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  out.textContent = `${days} дн. ${String(hours).padStart(2, '0')}:${String(
    mins
  ).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
});
