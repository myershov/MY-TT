import React, { Component } from 'react';
import { Table } from 'antd';
import AddButton from './AddButton.jsx';
import { data, columns } from './data.js';

export default class DataTable extends Component {
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