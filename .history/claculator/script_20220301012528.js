const output = document.getElementById('output');
const reset = document.getElementById('ac');
const btn = document.querySelectorAll('.btn');
const operants = ['=', '+', '-', '*', '/'];
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
      console.log('digits: ', digits);
      output.innerHTML += digits;
      if (element.value !== '+') {
        console.log(Number(output.textContent));
      } else {
        operantValue(digits, operants);
      }
    }
  });
});

function operantValue(arg, operant) {
  console.log('args: ', arg);
  const o = operant.forEach((element, i) => {
    console.log(i + '. ' + element);
    //console.log('opernat: ', operant);
      if (operant[i] !== arg[0]) {
      continue;
    } else {
      console.log(operant[i]);
    }
  });
  for (let i = 0; i < operant.length; i++) {
    if (operant[i] !== arg[0]) {
      continue;
    } else {
      console.log(operant[i]);
    }
  }
  if (arg == o) {
    console.log('it is equal');
  } else {
    console.log('it is NOT equal');
  }
}
