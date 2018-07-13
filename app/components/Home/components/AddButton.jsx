import React, { Component } from 'react';
import '../Home.styl';
import { Button, Modal, Form, Input, DatePicker} from 'antd';
const FormItem = Form.Item;


const CollectionCreateForm = Form.create()(
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
            <FormItem label="Daily Plan">
              {getFieldDecorator('dailyPlan', {
                rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Future Plan">
              {getFieldDecorator('futurePlan', {
                rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class AddButton extends Component {
   state = {
    visible: false,
  }

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      //var date1 = values.date._d;
      //delete values.date;
      //var values1 = date1 + values; 
     
      console.log('Received values of form: ',   values );
      this.props.onClick(values);
      
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button type="primary" style={{top: -48}} onClick={this.showModal}>Add</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default AddButton

