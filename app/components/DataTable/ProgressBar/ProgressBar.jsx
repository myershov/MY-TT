import React, { Component } from 'react'
import { Progress, Button } from "antd"
import "./ProgressBar.css"

class ProgressBar extends Component {
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
  }

  decline = () => {
    let percent = this.props.value - 10;
    if (percent < 0)  percent = 0
    this.props.onChange(percent)
  }

  render() {
    const { value } = this.props
    return (
      <div>
          <p id="dev">Dev {100 - value}%</p>
          <p id="men">Management {value}%</p>
          <Progress id="prg" successPercent={value} percent={100} status={"normal"} format={() => ''} />
        <Button.Group id="progress-buttons">
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </Button.Group>
      </div>
    )
  }
}

export default ProgressBar