let buffer = "0";
let runningTotal = 0;
let previousOperator;
const screen = document.querySelector(".result");

function buttonClicked(value) {
  if (isNaN(parseInt(value))) {
    handleSymbols(value);
  } else {
    handleNumbers(value);
  }
  rerender();
}
function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "*") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
  console.log(runningTotal);
}

function handleNumbers(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer = buffer + number;
  }
}

function handleMath(value) {
  if (value === "0") {
    //do nothing
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;
  buffer = "0";
}

function handleSymbols(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      break;
    case "backSpace":
      if (buffer.length == 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));

      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "+":
    case "-":
    case "/":
    case "*":
      handleMath(symbol);
  }
}

function init() {
  console.log("hi");
  const input = document.querySelectorAll(".button");
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", function (event) {
      buttonClicked(event.target.innerText);
    });
  }
}

function rerender() {
  screen.innerText = buffer;
}

init();
