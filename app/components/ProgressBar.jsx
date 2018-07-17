import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Progress, Button } from "antd";
import "./progressBarStyles.css";
const ButtonGroup = Button.Group;

class ProgressBar extends Component {
   state = {
    checked: true,
    disabled: true,
  };
  static defaultProps = {
    value: 50
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
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    const { value } = this.props
    return (
      <div id="main">
          <p id="dev">Dev {100 - value}%</p>
          <p id="man">Management {value}%</p>
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