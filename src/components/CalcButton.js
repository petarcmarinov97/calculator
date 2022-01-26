import React, { Component } from 'react';
import { Button } from 'antd';

export class CalcButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { label, width } = this.props;

    const buttonStyle = {
      width: width,
      margin:"1.5px",
      padding: "6.4px 0px",
      color: "black",
      backgroundColor: "#bcebf5",
    }

    return <Button
      type="primary"
      style={buttonStyle}
      size="large">
      {label}
    </Button>
  }
}

export default CalcButton;
