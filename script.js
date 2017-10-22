// ------ GLOBAL VARIABLES ------ //

let output = "";
let cacheNum = "";
let workingEquation = "";
const operators = ['/', '*', '-', '+'];

// ------ PRIMARY FUNCTIONS ------ //

const calc = button => {
  if (output.length <= 13) {
    output += button.toString();
    workingEquation = cacheNum + output;
    updateHTML(output);
  } else {
    console.log("character limit reached")
  }
}

const otherFunc = operator => {
  const val = validation(cacheNum.charAt(cacheNum.length - 1));
  console.log(val);
  if (!val) {
    cacheNum += output + " " + operator + " ";
    workingEquation = cacheNum;
    updateHTML(output);
    output = "";
  } else {
    console.log("two operators")
  }
}

const reset = () => {
    output = "";
    updateHTML(output);
    cacheNum = "";
    document.getElementById("calculation").innerHTML = 0;
    document.getElementById("working-equation").innerHTML = 0;
}

const equals = () => {
    cacheNum += output;
    cacheNum = eval(cacheNum).toString();
    workingEquation = cacheNum;
    updateHTML(cacheNum);
    output = "";
}

const backspace = () => {
    output = output.substring(0, output.length - 1);
    workingEquation = workingEquation.substring(0, workingEquation.length - 1);
    updateHTML(output);
    updateHTML(workingEquation);
}

// ------ OPERATOR FUNCTIONS ------ //

const add = () => otherFunc("+");
const minus = () => otherFunc("-");
const times = () => otherFunc("*");
const divide = () => otherFunc("/");

// ------ UPDATE NUMBER FUNCTIONS ------ //

const signtoggle = () => {
    output = document.getElementById("calculation").innerHTML *= -1;
    updateHTML();
    cacheNum = output;
    output = "";
  }

const decimal = () => {
    output += ".";
    document.getElementById("calculation").value = output;
}

const percentage = () => {
    output /= 100;
    updateHTML(output);
}

// ------ UPDATE UI ------ //

const updateHTML = value => {
  document.getElementById("calculation").innerHTML = value;
  document.getElementById("working-equation").innerHTML = workingEquation;
}

// ------ VALIDATION ------ //

const validation = lastElement => operators.includes(lastElement);