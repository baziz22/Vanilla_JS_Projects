const output = document.getElementById('output');
const reset = document.getElementById('ac');
const btn = document.querySelectorAll('.btn');
const operant = ['=', '+', '-', '*', '/'];
const equalOperation = '=';
function clear() {}
function digitDelete() {}
function appendNumber() {}
function chooseOperation(operation) {}
function compute() {}
function updateDisplay() {}
btn.forEach(element => {
  element.addEventListener('click', () => {
    let digits = '';
    console.log(element.value);
    if (element.value !== equalOperation) {
      let digits = '';
      digits.push(element.value);
      output.innerHTML += digits;
      console.log('digits: ', digits);
    }
  });
});

function k(e) {}
