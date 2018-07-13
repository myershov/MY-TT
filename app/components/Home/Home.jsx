import React, { Component } from 'react';
import './Home.styl';
import { Table, Modal, Button, Input, DatePicker } from 'antd';
import AddButton from './components/AddButton.jsx';
import { data, columns } from './components/data.js';

export default class Home extends Component {
    state = {
        data
    }
    handleCreate = (elem) => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    key: this.state.data.length + 1,
                    ...elem
                }
            ] 
        });
    }
    render () {
        console.log(this.state.data)
        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} />
                <AddButton onClick={this.handleCreate} />
            </div>
        )
    }
}

