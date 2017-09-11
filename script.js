let output = "";
let cacheNum = "";
let workingEquation = "";

const calc = button => {
  console.log(button);
  output += button.toString();
  updateHTML();
}

const reset = () => {
  output = "";
  updateHTML();
  cacheNum = "";
  document.getElementById("calculation").innerHTML = 0;
  document.getElementById("working-equation").innerHTML = 0;
}

const add = () => {
  cacheNum += output + "+";
  output = "";
}

const minus = () => {
  cacheNum += output + "-";
  output = "";
}

const times = () => {
  cacheNum += output + "*";
  output = "";
}

const divide = () => {
  cacheNum += output + "/";
  output = "";
}

const decimal = () => {
  output += ".";
  document.getElementById("calculation").value = output;
}

const equals = () => {
  cacheNum += output;
  console.log(cacheNum);
  document.getElementById("calculation").innerHTML = eval(cacheNum);
  cacheNum = eval(cacheNum);
  output = "";
}

const signtoggle = () => {
  output = document.getElementById("calculation").innerHTML *= -1;
  updateHTML();
  cacheNum = output;
  output = "";
}

const backspace = () => {
  output = output.substring(0, output.length - 1);
  updateHTML();
}

const percentage = () => {
  output /= 100;
  updateHTML();
}

const updateHTML = () => {
  document.getElementById("calculation").innerHTML = output;
  document.getElementById("working-equation").innerHTML = workingEquation;
}