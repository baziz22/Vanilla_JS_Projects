const output = document.getElementById('output');
const total = document.getElementById('total');
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
    let calcOperants = [];
    let calcDigits = [];
    let outputContents = '';
    //console.log(element.value);
    if (element.value !== equalOperation) {
      digits.push(element.textContent);
      //console.log('digits: ', digits);
      output.innerHTML += digits;
      console.log('operator: ', operantValue(digits, operants));
      if (element.textContent !== operantValue(digits, operants)) {
        console.log('operator: ', operantValue(digits, operants));
        console.log(Number(output.textContent));
        outputContents += output.textContent;
        console.log('outputcontents: ', outputContents);
      }
      if (element.textContent === operantValue(digits, operants)) {
        calcDigits.push(outputContents);
        console.log('2. OutputContents: ', outputContents);
        outputContents = '';
        calcOperants.push();
        //operantValue(digits, operants);
      }
    } else {
      compute();
    }
  });
});

function operantValue(arg, operant) {
  //console.log('args: ', arg);
  let oper = '';
  operant.forEach(i => {
    //console.log(i + '. ' + element);
    //console.log('opernat: ', operant);
    if (operant[i] === arg[0]) {
      console.log('this is the operant', operant[i]);
    }
    oper = operant[i];
  });
  return oper;
}
