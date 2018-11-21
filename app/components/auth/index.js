import React, { Component } from 'react'
import Auth from './auth'
import { Modal, Button } from 'antd'

class AuthModal extends Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          LogIN
        </Button>
        <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Auth />
        </Modal>
      </div>
    )
  }
}
export default AuthModal
