import React, { Component } from 'react';
import { buttonsConfig } from '../buttonsConfig';
import { deleteAll, deleteLast, calculate, defaultManipulations } from '../buttonUtils';
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
    }

    handleClick = (buttonValue) => {
        const value = buttonValue;
        this.switchController(value);
    }

    handleEnterKeyPress(e) {
        if (e.charCode === 13 || e.charCode === 18) {
            this.switchController("=");
        }
    }

    switchController(value) {
        const { inputValue } = this.state;
        switch (value) {
            case "=": {
                this.setState({
                    inputValue: calculate(inputValue)
                });
                break;
            }
            case "AC": {
                this.setState({
                    inputValue: deleteAll()
                })
                break;
            }
            case "DEL": {
                this.setState({
                    inputValue: deleteLast(inputValue)
                })
                break;
            }
            default: {
                this.setState({
                    inputValue: defaultManipulations(inputValue, value)
                })
                break;
            }
        }
    }

    renderButtons = () => {
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
                onKeyPress={this.handleEnterKeyPress}
                onChange={(e) => this.setState({ inputValue: e.currentTarget.value })}
            />
            {renderButtons()}
        </div >
    }
}

export default ButtonBox;
