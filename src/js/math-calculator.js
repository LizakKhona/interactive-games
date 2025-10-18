//калькулятор
const num1 = document.querySelector('#math-num1');
const num2 = document.querySelector('#math-num2');
const resultField = document.querySelector('#math-result');
const buttons = document.querySelectorAll('.button-calculate');
const equalButton = document.querySelector('#equal');

let operator = null;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    operator = btn.textContent.trim();

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

equalButton.addEventListener('click', () => {
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);
  let result;

  if (isNaN(number1) || isNaN(number2)) {
    resultField.value = 'Введіть числа!';
    return;
  }

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number2 !== 0 ? number1 / number2 : 'Ділення на 0!';
      break;
    default:
      result = 'Оберіть оператор!';
  }

  resultField.value = result;
});
