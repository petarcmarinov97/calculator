import React, { Component } from 'react';
import { Button } from 'antd';

export class CalcButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { handleClick, value } = this.props;

    handleClick && handleClick(value);
  }

  render() {
    const { value, width } = this.props;

    const buttonStyle = {
      width: width,
      margin: "1.5px",
      padding: "6.4px 0px",
      color: "black",
    }

    return <Button
      className="Button"
      style={buttonStyle}
      type="primary"
      size="large"
      onClick={this.handleClick}
    >
      {value}
    </Button>
  }
}

export default CalcButton;
