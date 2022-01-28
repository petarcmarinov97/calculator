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

const defaultManipulations = (inputValue, value) => {

    const lastElement = inputValue[inputValue.length - 1];
    const beforeLastElement = inputValue[inputValue.length - 2]
    const inputLength = inputValue.length;

    const startingWithZero = (inputLength === 1 && (inputValue === '0' || inputValue === '.'));

    const endingWithZeroAfterAction =
        (digits.includes(value)
            && actions.includes(beforeLastElement)
            && lastElement === "0"
            && value !== "=")

    const twoFollowingActions = (actions.includes(lastElement)
        && actions.includes(value))
        && value !== lastElement;

    if (startingWithZero) {
        if (value !== ".") {
            inputValue = value;
        }
        else {
            inputValue += ".";
        }
    }
    else if (actions.includes(value) && inputValue[inputValue.length - 1] === value) {
        return inputValue;
    }
    else if (endingWithZeroAfterAction || twoFollowingActions) {
        let tempValue = inputValue.slice(0, inputValue.length - 1);
        inputValue = tempValue + value.toString();
    }
    else {
        inputValue += value
    }

    return inputValue;
}

module.exports = {
    calculate,
    deleteAll,
    deleteLast,
    defaultManipulations
}