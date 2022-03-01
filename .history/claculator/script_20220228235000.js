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
    output.innerHTML += element.value;
    if (!equalOperation) {
      let digits = element.value;
      output.innerHTML += digits;
    }
  });
});

function k(e) {}
