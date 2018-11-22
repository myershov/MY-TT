import { Modal, Form, Input, DatePicker, Switch, Card } from 'antd'
import React, { Component } from 'react'
import moment from 'moment'

class AddForm extends Component {
  // TODO: Add radio, switcher and swipe between daily plan
  // and end of day status incluading totally hours worked
  state = { switch: false }
  switch = checked => {
    this.setState({ switch: !this.state.switch }, () => console.log('switch', this.state))
  }
  endData = () => {
    if (this.props.selected && this.props.selected.date) {
      return moment().diff(moment(this.props.selected.date), 'minutes')
    } else {
      return '0'
    }
  }
  render() {
    let dailyPlan = this.props.selected && this.props.selected.plan
    let futurePlan = ''
    let Notes = ''

    if (this.props.selected && this.props.selected.key) {
      dailyPlan = this.props.selected.dailyPlan
      futurePlan = this.props.selected.futurePlan
      Notes = this.props.selected.notes
    }

    const {
      form: { getFieldDecorator },
      onCancel,
      onCreate,
      visible,
    } = this.props

    return (
      <Modal onCancel={onCancel} visible onOk={onCreate} title="Daily Plan" okText="OK">
        <Form layout="vertical">
          {this.props.selected == undefined && (
            <Form.Item label="Date">
              {getFieldDecorator('date', {
                rules: [{ required: true, message: 'Must be filled!' }],
                initialValue: moment(),
              })(<DatePicker />)}
            </Form.Item>
          )}
          <Form.Item label="Daily plan">
            {getFieldDecorator('dailyPlan', {
              rules: [{ required: true, message: 'Must be filled!' }],
              initialValue: dailyPlan,
            })(<Input.TextArea />)}
          </Form.Item>
          <Form.Item label="Future plan">
            {getFieldDecorator('futurePlan', {
              initialValue: futurePlan,
            })(<Input.TextArea />)}
          </Form.Item>
          <Form.Item label="Notes">
            {getFieldDecorator('notes', {
              initialValue: Notes,
            })(<Input.TextArea />)}
          </Form.Item>

          <Form.Item label="Switch">
            {getFieldDecorator('switch', { initialValue: this.state.switch })(
              <Switch onChange={() => this.switch()} />
            )}
          </Form.Item>

          {this.state.switch === true && (
            <Form.Item label="Tottaly worked">
              {getFieldDecorator('TottalyWorked', {
                initialValue: this.endData(),
              })(
                <Card style={{ width: 300 }}>
                  <p>
                    {this.endData()}
                    {' minutes'}
                  </p>
                </Card>
              )}
            </Form.Item>
          )}
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(AddForm)
