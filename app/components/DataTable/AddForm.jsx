import React, { Component } from 'react'
import { Modal, Form, Input, DatePicker } from 'antd'
import ProgressBar from './ProgressBar/ProgressBar.jsx'

class AddForm extends Component {
  render () {
    const {
      visible,
      onCancel,
      onCreate,
      form: { getFieldDecorator }
    } = this.props
    return (
      <Modal
        style={{ top: 0 }}
        visible={visible}
        title="Adding"
        okText="Add"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Form.Item label="Date">
            {getFieldDecorator('date', {
              rules: [{ required: true, message: 'Must be filled!' }]
            })(<DatePicker />)}
          </Form.Item>
          {/* <Form.Item label="ProgressBar">
            {getFieldDecorator('progressBar')(<ProgressBar />)}
          </Form.Item> */}
          <Form.Item label="Username">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Must be filled!' }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Daily plan">
            {getFieldDecorator('dailyPlan', {
              rules: [{ required: true, message: 'Must be filled!' }]
            })(<Input.TextArea />)}
          </Form.Item>
          <Form.Item label="Future plan">
            {getFieldDecorator('futurePlan')(<Input.TextArea />)}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(AddForm)
