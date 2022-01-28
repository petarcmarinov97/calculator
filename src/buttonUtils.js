const { buttonsConfig } = require("./buttonsConfig");

let digits = [];
let actions = []

buttonsConfig
    .forEach(element => element.type === "digit" && digits.push(element.value));

buttonsConfig
    .forEach(element => element.type === "action" && actions.push(element.value));

const calculate = (inputValue) => {
    let tempValue = "";

    if (inputValue[inputValue.length - 2] === "/" && inputValue[inputValue.length - 1] === "0") {
        tempValue = "Cannot divide by zero";
    }
    else {
        tempValue = inputValue;
    }

    try {
        inputValue = (eval(tempValue) || "") + ""
    } catch (e) {
        inputValue = "Error"
    }

    return inputValue;
}

const deleteAll = () => {
    return "";
}

const deleteLast = (inputValue) => {
    return inputValue.slice(0, -1);
}

const defaultManipulations = (curInput, input) => {

    const lastChar = curInput[curInput.length - 1];
    const beforeLastChar = curInput[curInput.length - 2]
    const prevInputLenght = curInput.length;

    const isStartingWithZero = (prevInputLenght === 1 && (curInput === '0' || curInput === '.'));
    const isValueUnLikeLastChar = input !== lastChar;
    const DoActionsContainsChar = (charToCheck) => actions.includes(charToCheck);
    const isInputContainsActions = actions.some(element => input.toString().includes(element));
    const isInputEqualsToLastChar = curInput[curInput.length - 1] === input;
    const isValueADigit = digits.includes(input);
    const endingWithZeroAfterAction = (isValueADigit && DoActionsContainsChar(beforeLastChar) && lastChar === "0");

    const twoFollowingActions = (DoActionsContainsChar(lastChar) && isValueUnLikeLastChar && isInputContainsActions);

    if (isStartingWithZero) {
        if (input !== ".") {
            curInput = input;
        }
        else {
            curInput += ".";
        }
    }
    else if (DoActionsContainsChar(input) && isInputEqualsToLastChar) {
        return curInput;
    }
    else if (endingWithZeroAfterAction || twoFollowingActions) {
        let tempValue = curInput.slice(0, curInput.length - 1);
        curInput = tempValue + input.toString();
    }
    else if (isInputContainsActions && actions.includes(input)) {
        let tempValue = eval(curInput) + input;
        curInput = tempValue;
    }
    else {
        curInput += input;
    }
    
    return curInput;
}

module.exports = {
    calculate,
    deleteAll,
    deleteLast,
    defaultManipulations
}