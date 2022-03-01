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
    let digits = [];
    console.log(element.value);
    if (element.value !== equalOperation) {
      digits.push(element.value);
      console.log(' inner');
      console.log('digits: ', digits);
      output.innerHTML += digits;
      if (element.value !== '+') {
        console.log(Number(output.textContent));
      }
    }
  });
});

function k(e) {}
