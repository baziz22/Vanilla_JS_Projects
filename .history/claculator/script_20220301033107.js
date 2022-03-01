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
let outputContents2 = '';
btn.forEach(element => {
  element.addEventListener('click', () => {
    let digits = [];
    let saveOperants = [];
    let saveDigits = [];
    let outputContents = 3;

    console.log(element.value);
    if (element.value !== equalOperation) {
      digits.push(element.value);
      let g = operantValue(digits, operants);
      console.log('g: ', g);
      //console.log('digits: ', digits);
      output.innerHTML += digits;
      if (element.value !== g) {
        outputContents2 += output.textContent;
        console.log(outputContents2);
      }
      if (element.value === g) {
        Number(outputContents2);
        console.log('Converted outputcontents:', outputContents2);
        saveDigits.push(outputContents2);
        console.log('2. OutputContents: ', outputContents);
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
