let numbers = [];
let displayElement = document.getElementById("cal-display");
let result = 0;
let operationId = "";
let prevOperator = "";
let currentOperator = "";
let counter = 0;
let resultDigits = [];
function displayNumber(clickedId) {
  if (numbers[0] === "0") {
    numbers.pop();
  }
  let number = null;
  let dot = ".";
  switch (clickedId) {
    case "zero":
      number = 0;
      break;
    case "one":
      number = 1;
      break;
    case "two":
      number = 2;
      break;
    case "three":
      number = 3;
      break;
    case "four":
      number = 4;
      break;
    case "five":
      number = 5;
      break;
    case "six":
      number = 6;
      break;
    case "seven":
      number = 7;
      break;
    case "eight":
      number = 8;
      break;
    case "nine":
      number = 9;
      break;
    case "dot":
      dot;
      break;
    default:
      number = 0;
      break;
  }
  if (clickedId === "dot") {
    numbers.push(dot);
  }
  numbers.push(number);
  for (let index = 0; index < numbers.length; index++) {
    if (numbers.length == 1) {
      var value = numbers[index];
      displayElement.innerHTML = value;
    } else {
      numbers.map(String);
      value = numbers.join("");
      displayElement.innerHTML = value;
    }
  }
}
function compute(clickedId) {
  operationId = clickedId;
  let firstNumber = displayElement.innerHTML;
  prevOperator = firstNumber;
  clearDisplay();
}

function clearDisplay() {
  numbers = [];
  displayElement.innerHTML = 0;
  counter = 0;
}
function resultDisplay() {
  ++counter;
  switch (operationId) {
    case "plus":
      var secondNumber = displayElement.innerHTML;
      if (counter == 1) {
        currentOperator = secondNumber;
        result = parseFloat(currentOperator) + parseFloat(prevOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        console.log(splitIntoArray(numbers));
        resultDigits = splitIntoArray(numbers);
      } else {
        while (counter == 2) {
          prevOperator = currentOperator;
          let nextNumber = displayElement.innerHTML;
          currentOperator = nextNumber;
          counter++;
        }
        nextNumber = displayElement.innerHTML;
        currentOperator = nextNumber;
        result = parseFloat(currentOperator) + parseFloat(prevOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        console.log(splitIntoArray(numbers));
        resultDigits = splitIntoArray(numbers);
      }
      displayElement.innerHTML = result;
      break;
    case "minus":
      secondNumber = displayElement.innerHTML;
      if (counter == 1) {
        currentOperator = secondNumber;
        result = parseFloat(prevOperator) - parseFloat(currentOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        console.log(splitIntoArray(numbers));
        resultDigits = splitIntoArray(numbers);
      } else {
        while (counter == 2) {
          prevOperator = currentOperator;
          let nextNumber = displayElement.innerHTML;
          currentOperator = nextNumber;
          counter++;
        }
        nextNumber = displayElement.innerHTML;
        currentOperator = nextNumber;
        result = parseFloat(currentOperator) - parseFloat(prevOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        console.log(splitIntoArray(numbers));
        resultDigits = splitIntoArray(numbers);
      }
      displayElement.innerHTML = result;
      break;
    case "times":
      secondNumber = displayElement.innerHTML;
      if (counter == 1) {
        currentOperator = secondNumber;
        result = parseFloat(prevOperator) * parseFloat(currentOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        console.log(splitIntoArray(numbers));
        resultDigits = splitIntoArray(numbers);
      } else {
        while (counter == 2) {
          prevOperator = currentOperator;
          let nextNumber = displayElement.innerHTML;
          currentOperator = nextNumber;
          counter++;
        }
        nextNumber = displayElement.innerHTML;
        currentOperator = nextNumber;
        result = parseFloat(currentOperator) * parseFloat(prevOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        console.log(splitIntoArray(numbers));
        resultDigits = splitIntoArray(numbers);
      }
      displayElement.innerHTML = result;
      break;
    case "division":
      secondNumber = displayElement.innerHTML;
      if (counter == 1) {
        currentOperator = secondNumber;
        result = parseFloat(prevOperator) / parseFloat(currentOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        resultDigits = splitIntoArray(numbers);
      } else {
        while (counter == 2) {
          prevOperator = currentOperator;
          let nextNumber = displayElement.innerHTML;
          currentOperator = nextNumber;
          counter++;
        }
        nextNumber = displayElement.innerHTML;
        currentOperator = nextNumber;
        result = parseFloat(currentOperator) / parseFloat(prevOperator);
        // splitting results digits to get erased right...
        numbers = [];
        numbers.push(result);
        console.log(splitIntoArray(numbers));
        resultDigits = splitIntoArray(numbers);
      }
      displayElement.innerHTML = result;
      break;

    default:
      return prevOperator;
      break;
  }
}
function eraser() {
  if (resultDigits.length == 0) {
    numbers.pop();
    value = numbers.join("");

    if (numbers.length == 0) {
      value = numbers[0] = "0";
    }
    displayElement.innerHTML = value;
  } else {
    resultDigits.pop();
    value = resultDigits.join("");
    if (resultDigits.length == 0) {
      value = resultDigits[0] = "0";
      console.log(numbers);
      numbers = [];
      console.log(numbers);
      console.log(resultDigits);
    }
    displayElement.innerHTML = value;
  }
}

function splitIntoArray(num) {
  return Array.from(String(num));
}
