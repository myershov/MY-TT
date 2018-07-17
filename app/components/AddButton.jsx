import React, { Component } from 'react';
import { Button, Progress } from 'antd';
import AddForm from './AddForm.jsx';
import ProgressBar from './ProgressBar.jsx'
import "./progressBarStyles.css";
class AddButton extends Component {
   state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    const { valu } = this.props
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      values.date = values.date._d.toString().substring(4,15);

        if (values.progressBar === undefined){
          values.progressBar = <div>
              <div><p id='dev'>Dev</p><p id='man'>Management</p></div>
              <Progress type="circle"  percent={50} width={70}  />
              <Progress type="circle"  percent={50} width={70} />
            </div>
        }
        else{
          values.progressBar = <div style={{width: 250}}>
              <div><p id='dev'>Dev</p><p id='man'>Management</p></div>
              <Progress type="circle"  percent={100 - values.progressBar} width={70}  />
              <Progress type="circle"  percent={values.progressBar} width={70} />
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