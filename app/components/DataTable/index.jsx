import React, { Component } from 'react'
import { addTaskToFirebase } from '../../firebase'
import AddButton from './AddButton.jsx'
import { Button, Table, Divider } from 'antd'
import { getTasksThunk, watchTaskAddedEvent, watchTaskRemovedEvent } from '../../store/gameboard/actions'
import { connect } from 'react-redux'

import Auth from '../auth/auth'
class DataTable extends Component {
  componentDidMount() {
    this.props.dispatch(getTasksThunk())
    // TODO: Recheck below
    watchTaskRemovedEvent(this.props.dispatch)
    watchTaskAddedEvent(this.props.dispatch)
    // TODO: Add auth
    //localStorage.setItem('myName', 'SDS')
  }
  hi = () => {
    console.log('hi')
  }
  columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Daily plan',
      dataIndex: 'dailyPlan',
      key: 'dailyPlan',
    },
    {
      title: 'Future plan',
      dataIndex: 'futurePlan',
      key: 'futurePlan',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      title: 'Action',
      key: 'action',
      render: text => (
        <span>
          <a href="javascript:void(0);" onClick={() => this.hi()}>
            Change
          </a>

          <Divider type="vertical" />
        </span>
      ),
    },
  ]
  renderingAuth = () => {
    let buff = localStorage.getItem('myName')
    if (buff == null) {
      return <Auth style={{ marginLeft: 8 }} />
    }
  }
  renderingAdd = () => {
    let buff = localStorage.getItem('myName')
    if (buff === null) {
      return <div style={{ marginLeft: 8 }}>to add task u must login first</div>
    } else {
      return <AddButton onClick={addTaskToFirebase} />
    }
  }
  render() {
    // TODO: Add edit/delete of plans
    return (
      <div>
        {this.renderingAuth()}

        <Table columns={this.columns} dataSource={(this.props.tasks || []).map(i => i.task)} />
        {this.renderingAdd()}
      </div>
    )
  }
}

const mapState = state => ({ tasks: state.tasks })

export default connect(mapState)(DataTable)
