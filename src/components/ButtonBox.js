import React, { Component } from 'react';
import { buttonsConfig } from '../buttonsConfig';
import { deleteAll, deleteLast, calculate } from '../buttonUtils';
import CalcButton from './CalcButton';

export class ButtonBox extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.switchController = this.switchController.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this)
        this.onChange = this.onChange.bind(this);
        this.sortButtons = this.sortButtons.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }

    handleClick = (buttonValue) => {
        const value = buttonValue;
        this.switchController(value);
    }

    handleOnKeyDown(e) {
        if (e.keyCode === 46) {
            this.switchController("DEL");
        }
    }

    handleEnterKeyPress(e) {
        if (e.charCode === 13 || e.charCode === 61) {
            this.switchController(String.fromCharCode(61));
            e.preventDefault();
        }

        if ((e.charCode < 42 || e.charCode > 57)) {
            e.preventDefault();
        }
    }

    onChange(e) {
        this.setState({ inputValue: e.currentTarget.value });
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
            default: {
                tempValue = (inputValue + value).toString();
                break;
            }
        }

        this.setState({
            inputValue: tempValue
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
                key={index}
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

        const { renderButtons, state } = this;
        const { inputValue } = state;

        return <div className="wrapper" >
            <input
                style={inputFieldStyle}
                type="text"
                value={inputValue}
                onKeyDown={this.handleOnKeyDown}
                onKeyPress={this.handleEnterKeyPress}
                onChange={this.onChange}
            />
            {renderButtons()}
        </div >
    }
}

export default ButtonBox;
