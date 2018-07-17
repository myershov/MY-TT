import React, { Component } from 'react';
import { Button, Progress } from 'antd';
import AddForm from './AddForm.jsx';

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

      console.log('Received values of form: ', values);
      values.date = values.date._d.toString().substring(4,15);
      if (values.progressBar === undefined){
            values.progressBar = 
            <div>
              <p id="dev">{50}%</p>
              <p id="men">{50}%</p>
              <Progress id="prg" successPercent={50} percent={100} status={"normal"} format={() => ''} />
            </div>
          }
          else{
            values.progressBar = 
            <div>
              <p id="dev">{100 - values.progressBar}%</p>
              <p id="men">{values.progressBar}%</p>
              <Progress id="prg" successPercent={values.progressBar} percent={100} status={"normal"} format={() => ''} />
            </div>
          }
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
        <Button style={{top: -48}} type="primary" onClick={this.showModal}>Add</Button>
        <AddForm
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