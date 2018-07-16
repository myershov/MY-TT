import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Progress, Button } from "antd";
import "./progressBarStyles.css";

const ButtonGroup = Button.Group;

class ProgressBar extends Component {
  static defaultProps = {
    value: 10
  }
  increase = () => {
    const { onChange, value } = this.props
    let percent = value + 10;
    if (percent > 100) {
      percent = 100;
    }
    onChange(percent)
  };

  decline = () => {
    const { onChange, value } = this.props
    let percent = value - 10;
    if (percent < 0) {
      percent = 0;
    }
    onChange(percent)
  };

  render() {
    const { value } = this.props
    return (
      <div id="main">
          <p id="dev">Dev {100 - value}%</p>
          <p id="men">Management {value}%</p>
          <Progress id="prg" percent={value} status={"normal"} format={() => ''} />
        <ButtonGroup id="progress-buttons">
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}

export default ProgressBar