import React, { Component } from 'react';
import { Select } from 'antd';

const { Option, OptGroup} = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function click(value) {
    stopPropagation(Select);
    startPropagation(Input);
    //console.log('handleChildClick');
  }

class Selected extends Component {
  


  // click = () => {
  //  Select.stopPropagation();
  //  Input.startPropagation();
 // };
  render() {
    return (
      <div>
        <Select defaultValue="" style={{ width: 320 }} onChange={handleChange}>
          <OptGroup label="Name">
            <Option value="Alex-135-135">Alex-135-135</Option>
            <Option value="Savchek">Savchek</Option>
            <Option value="lnlhntr">lnlhntr</Option>
          </OptGroup>
          <OptGroup label="Input">
            <Option value="Input" onClick={click}>Input</Option>
          </OptGroup>
        </Select> 
      </div>
    );
  }
}
export default Selected;

