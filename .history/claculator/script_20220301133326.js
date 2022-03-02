const output = document.getElementById('output');
const total = document.getElementById('total');
const reset = document.getElementById('ac');
const btn = document.querySelectorAll('.btn');
const operants = ['=', '+', '-', '*', '/'];
const equalOperation = '=';
function clear() {}
function digitDelete() {}
const operantValue = function (arg, operant) {
  let theOperant = '';
  //console.log('args: ', arg);
  operant.forEach((element, i) => {
    //console.log(i + '. ' + element);
    //console.log('opernat: ', operant);
    if (operant[i] === arg[0]) {
      console.log('this is the operant', operant[i]);
      theOperant = operant[i];
    }
  });
  return theOperant;
};

function appendNumber(d) {
  let digits = [];
  let saveOperants = [];
  let saveDigits = [];
  let outputContents = '';
  console.log('print: ', d.value);
  if (element.value !== equalOperation) {
    digits.push(element.value);
    let g = operantValue(digits, operants);
    console.log('g: ', g);
    //console.log('digits: ', digits);
    output.innerHTML += digits;
    if (element.value !== g) {
      outputContents += output.textContent;
      console.log(outputContents);
      //saveOutputDigit = outputContents;
      //console.log('s: ',saveOutputDigit);
      out = outputContents.concat();
      console.log('out: ', out);
    }
    if (element.value === g) {
      outputContents = '';
      //saveOutputDigit = '';
      saveOperants.push(g);
      saveDigits.push(Number(out));
      console.log('2. OutputContents: ', out);
      console.log('saveDigits: ', saveDigits);
      //reset outputContent\
      console.log('saveOperants: ', saveOperants);
      //operantValue(digits, operants);
    }
  } else {
    compute();
  }
}
function chooseOperation(operation) {}
function compute() {
  console.log('Final Result');
}
function updateDisplay() {}
let out = '';
let saveOutputDigit = '';

btn.forEach(element => {
  element.addEventListener('click', appendNumber(element));
});
