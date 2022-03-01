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
function compute() {
  console.log('Final Result');
}
function updateDisplay() {}
let out = '';
btn.forEach(element => {
  element.addEventListener('click', () => {
    let digits = [];
    let saveOperants = [];
    let saveDigits = [];
    let outputContents = '';
    console.log(element.value);
    if (element.value !== equalOperation) {
      digits.push(element.value);
      let g = operantValue(digits, operants);
      console.log('g: ', g);
      //console.log('digits: ', digits);
      output.innerHTML += digits;
      if (element.value !== g) {
        outputContents += output.textContent;
        console.log(outputContents);
        out[outputContents];
        console.log(out);
      }
      if (element.value === g) {
        console.log('Converted outputcontents:', out);
        saveDigits.push(Number(out));
        console.log('2. OutputContents: ', out);
        console.log('saveDigits: ', saveDigits);
        //reset outputContent\
        saveOperants.push();
        console.log('saveOperants: ', saveOperants);
        //operantValue(digits, operants);
      }
    } else {
      compute();
    }
  });
});

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
