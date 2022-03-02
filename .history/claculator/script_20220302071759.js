const display_header = document.querySelectorAll('.equation');
const display = document.getElementById('.total');
const display_footer = document.getElementById('.temp-result');
const numbers = document.querySelectorAll('number');
const btn = document.querySelectorAll('.btn');

const operants = ['=', '+', '-', '*', '/'];
const equalOperation = '=';

numbers.forEach(el => {
  el.addEventListener('click', updateDisplay());
});
console.log('object');
updateDisplay();
function clear() {}
function digitDelete() {}

function appendNumber(d) {}
function chooseOperation(operation) {}
function compute() {
  console.log('Final Result');
}
function updateDisplay() {
  console.log('Bader Binsunbil');
}
