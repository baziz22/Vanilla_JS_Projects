const display_header = document.getElementById('equation');
const display = document.getElementById('total');
const display_final_result = document.getElementById('final-result');
const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const equalOperation = document.querySelector('.equal');
const clearAll = document.getElementById('clear-all');

let result_header = '';
let userInput = '';
let final_result = null;
let lastOperation = '';
let haveDot = false;

numbers.forEach(el => {
  el.addEventListener('click', updateDisplay);
});
function updateDisplay(e) {
  if (e.target.innerText === '.' && !haveDot) {
    haveDot = true;
  } else if (e.target.innerText === '.' && haveDot) {
    return;
  }
  userInput += e.target.innerText;
  display.innerText = userInput;
}

operation.forEach(el => {
  el.addEventListener('click', chooseOperation);
});
function chooseOperation(e) {
  if (!userInput) return;
  haveDot = false;
  const operationMark = e.target.innerText;
  lastOperation && userInput && final_result
    ? compute()
    : (final_result = parseFloat(userInput));
  clearResult(operationMark);
  lastOperation = operationMark;
}

function clearResult(operationMark = '') {
  result_header += userInput + ' ' + operationMark + ' ';
  display_header.innerText = result_header;
  display.innerText = '';
  userInput = '';
  display_final_result.innerText = final_result;
}

equalOperation.addEventListener('click', e => {
  if (!result_header || !userInput) return;
  haveDot = false;
  compute();
  clearResult();
  final_result.innerText = '';
  userInput = final_result;
  display_innerText = final_result;
  result_header = '';
});

clearAll.addEventListener('click', clear);
function clear() {
  display_header.innerText = '0';
  display.innerText = '0';
  display_final_result.innerText = '0';
  result_header = '';
  userInput = '';
  final_result = '';
}

function compute() {
  switch (lastOperation) {
    case '*':
      final_result = parseFloat(final_result) * parseFloat(userInput);
      break;
    case '/':
      final_result = parseFloat(final_result) / parseFloat(userInput);
      break;
    case '-':
      final_result = parseFloat(final_result) - parseFloat(userInput);
      break;
    case '+':
      final_result = parseFloat(final_result) + parseFloat(userInput);
      break;
  }
}
