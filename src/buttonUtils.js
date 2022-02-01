const { buttonsConfig } = require("./buttonsConfig");

let digits = [];
let actions = []

buttonsConfig
    .forEach(element =>
        (element.type === "digit" && digits.push(element.value))
        ||
        (element.type === "action" && actions.push(element.value)));

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

const mathFactorial = (inputValue) => {
    if (inputValue === 0 || inputValue === 1) {
        return 1;
    } else {
        return inputValue * mathFactorial(inputValue - 1);
    }
}

const mathPow = (inputValue) => {
    return eval(inputValue) ** 2;
}

const mathSqrt = (inputValue) => {
    return Math.sqrt(eval(inputValue));
}
module.exports = {
    calculate,
    deleteAll,
    deleteLast,
    mathFactorial,
    mathPow,
    mathSqrt
}