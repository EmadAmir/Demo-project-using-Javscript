//import outputResult from '/vendor.js';

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// this fuction gets the input from the user
const getUserNumberInput = () => {
  return parseInt(userInput.value);
};
//creates a calculation log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, `${calcDescription}`); // this function is found in vendor file
};
const writeToLog = (operationIdentifier, prevResult, operationNumber, newResult) => {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
};

const add = () => {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput(`+`, intialResult, enteredNumber);
  writeToLog('ADD',intialResult,enteredNumber,currentResult);
};
const subtraction = () => {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput(`-`, intialResult, enteredNumber);
  writeToLog('SUBTRACT',intialResult,enteredNumber,currentResult);
};

const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput(`*`, intialResult, enteredNumber);
  writeToLog('MULTIPLY',intialResult,enteredNumber,currentResult);
};
const divide = () => {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput(`/`, intialResult, enteredNumber);
  writeToLog('DIVIDE',intialResult,enteredNumber,currentResult);
};
addBtn.addEventListener(`click`, add);
subtractBtn.addEventListener(`click`, subtraction);
multiplyBtn.addEventListener(`click`, multiply);
divideBtn.addEventListener(`click`, divide);
// let x = add(2,3);
//outputResult(x);
