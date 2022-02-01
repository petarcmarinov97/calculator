import React, { Component } from 'react';
import { buttonsConfig } from '../buttonsConfig';
import { deleteAll, deleteLast, calculate, mathFactorial, mathPow, mathSqrt } from '../buttonUtils';
import CalcButton from './CalcButton';

export class ButtonBox extends Component {

    constructor() {
        super();

        this.state = {
            inputValue: "",
            isValidInput: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.switchController = this.switchController.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.sortButtons = this.sortButtons.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    }

    handleClick = (buttonValue) => {
        const value = buttonValue;
        this.switchController(value);
    }

    onChangeHandler(e) {
        const { isValidInput } = this.state;

        if (isValidInput) {
            this.setState({ inputValue: e.currentTarget.value });
        }
    }

    onKeyDownHandler(e) {
        const str = new RegExp("^[0-9()+\\-*.\\/]*$");

        str.test(e.key)
            ? this.setState({ isValidInput: true })
            : this.setState({ isValidInput: false })

        if (e.key === "Enter" || e.key === "=") {
            this.switchController("=");
        }
        if (e.key === "Backspace") {
            this.switchController("AC");
        }
        if (e.key === "Delete") {
            this.switchController("DEL");
        }
    }

    switchController(value) {
        const { inputValue } = this.state;
        let tempValue = "";

        switch (value) {
            case "=": {
                tempValue = calculate(inputValue);
                break;
            }
            case "AC": {
                tempValue = deleteLast(inputValue);
                break;
            }
            case "DEL": {
                tempValue = deleteAll();
                break;
            }
            case "x²": {
                tempValue = mathPow(inputValue);
                break;
            }
            case "√": {
                tempValue = mathSqrt(inputValue);
                break;
            }
            case "x!": {
                tempValue = mathFactorial(inputValue);
                break;
            }
            default: {
                tempValue = (inputValue + value).toString();
                break;
            }
        }

        this.setState({
            inputValue: tempValue.toString()
        })
    }

    sortButtons() {
        buttonsConfig
            .sort(function (a, b) {
                var rowA = a.position[0];
                var rowB = b.position[0];

                var colA = a.position[1];
                var colB = b.position[1];

                if (rowA > rowB) return 1;
                if (rowA < rowB) return -1;
                if (colA > colB) return 1;
                if (colB < colA) return -1;
                if (rowA === rowB && colA < colB) return -1;
                return 0;
            })
    }

    renderButtons = () => {
        this.sortButtons();

        return buttonsConfig.map((button, index) => (
            <CalcButton
                handleClick={this.handleClick}
                key={button.value}
                type="primary"
                value={button.value}
                width={button.width}
                size="large" />
        ))
    }

    render() {
        const inputFieldStyle = {
            height: "40px",
            backgroundColor: '#08979c'
        }
        //da si vzema tuk
        const { renderButtons, onKeyDownHandler, onChangeHandler, state } = this;
        const { inputValue } = state;

        return <div className="wrapper" >
            <input
                style={inputFieldStyle}
                type="text"
                value={inputValue}
                onKeyDown={onKeyDownHandler}
                onChange={onChangeHandler}
            />
            {renderButtons()}
        </div >
    }
}

export default ButtonBox;
