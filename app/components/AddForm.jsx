import React, { Component } from 'react';
import { Modal, Form, Input, DatePicker } from 'antd';

const FormItem = Form.Item;


const AddForm = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          style={{top: 0}}
          visible={visible}
          title="Adding"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Date">
              {getFieldDecorator('date', {
                rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <DatePicker />
              )}
            </FormItem>
            <FormItem label="Username">
              {getFieldDecorator('username', {
               rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Daily plan">
              {getFieldDecorator('dailyPlan', {
                rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <Input.TextArea />
              )}
            </FormItem>
            <FormItem label="Future plan">
              {getFieldDecorator('futurePlan', {
               rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <Input.TextArea />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default AddForm