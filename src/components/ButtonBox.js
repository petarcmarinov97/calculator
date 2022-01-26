import React, { Component } from 'react';
import { buttonsConfig } from '../buttonsConfig';
import CalcButton from './CalcButton';

export class ButtonBox extends Component {
    render() {
        const inputStyle = {
            height: "40px",
            backgroundColor: '#08979c'
        }

        return <div className="wrapper" >
            <input
                style={inputStyle}
                type="text"
            />
            {
                buttonsConfig.map(button => (
                    <CalcButton
                        type="primary"
                        label={button.label}
                        width={button.width}
                        onClickHandler={button.onClickHandler}
                        size="large" />
                ))
            }
        </div >
    }
}

export default ButtonBox;
