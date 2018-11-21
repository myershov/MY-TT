import { Modal, Form, Input, DatePicker } from 'antd'
import React, { Component } from 'react'
import moment from 'moment'

class AddForm extends Component {
  // TODO: Add radio, switcher and swipe between daily plan
  // and end of day status incluading totally hours worked
  state = {}
  render() {
    const { editing } = this.state
    const {
      form: { getFieldDecorator },
      onCancel,
      onCreate,
      visible,
    } = this.props

    return (
      <Modal onCancel={onCancel} visible onOk={onCreate} title="Daily Plan" okText="OK">
        <Form layout="vertical">
          <Form.Item label="Date">
            {getFieldDecorator('date', {
              rules: [{ required: true, message: 'Must be filled!' }],
              initialValue: moment(),
            })(<DatePicker />)}
          </Form.Item>
          <Form.Item label="Daily plan">
            {getFieldDecorator('dailyPlan', {
              rules: [{ required: true, message: 'Must be filled!' }],
              initialValue: this.props.selected && this.props.selected.plan,
            })(<Input.TextArea />)}
          </Form.Item>
          <Form.Item label="Future plan">
            {getFieldDecorator('futurePlan', {
              initialValue: '',
            })(<Input.TextArea />)}
          </Form.Item>
          <Form.Item label="Notes">
            {getFieldDecorator('notes', {
              initialValue: '',
            })(<Input.TextArea />)}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(AddForm)
