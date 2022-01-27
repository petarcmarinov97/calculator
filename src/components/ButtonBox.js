import React, { Component } from 'react';
import { buttonsConfig } from '../buttonsConfig';
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
    }

    handleClick(label) {
        const value = label;
        this.switchController(value);
    }

    switchController(value) {
        switch (value) {
            case "=": {
                this.calculate();
                break;
            }
            case "AC": {
                this.deleteAll();
                break;
            }
            case "DEL": {
                this.deleteLast();
                break;
            }
            default: {
                const{inputValue}=this.state;

                if (inputValue.length === 1 && (inputValue === '0' || inputValue === '.')) {
                    if(value!=="."){
                        this.setState({
                            inputValue: value
                        })
                    }
                    else{
                        this.setState({
                            inputValue: inputValue + "."
                        })
                    }
                } else {
                    this.setState(
                        {
                            inputValue: inputValue + value
                        })
                }
                break;
            }
        }
    }

    calculate = () => {
        let tempValue = "";
        let { inputValue } = this.state
        if (inputValue.includes("--")) {
            tempValue = inputValue.replace("--", "+");
        }
        else {
            tempValue = inputValue;
        }

        try {
            this.setState({
                inputValue: (eval(tempValue) || "") + ""
            })
        } catch (e) {
            this.setState({
                inputValue: "Error"
            })
        }
    }

    deleteAll = () => {
        this.setState({
            inputValue: ""
        })
    }

    deleteLast = () => {
        const { inputValue } = this.state
        this.setState({
            inputValue: inputValue.slice(0, -1)
        })
    }

    renderButtons=()=>{
      return buttonsConfig.map((button, index) => (
            <CalcButton
                handleClick={this.handleClick}
                key={index}
                type="primary"
                label={button.label}
                width={button.width}
                size="large" />
        ))
    }

    render() {
        const inputFieldStyle = {
            height: "40px",
            backgroundColor: '#08979c'
        }

        const { renderButtons,state } = this;
        const {inputValue} = state;
        
        return <div className="wrapper" >
            <input
                style={inputFieldStyle}
                type="text"
                defaultValue={inputValue}
            />
                {renderButtons()}
        </div >
    }
}

export default ButtonBox;
