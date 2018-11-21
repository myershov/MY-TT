import React, { Component } from 'react'
import { addTaskToFirebase } from '../../firebase'
import AddButton from './AddButton.jsx'
import { Button, Table, Divider } from 'antd'
import { getTasksThunk, watchTaskAddedEvent, watchTaskRemovedEvent } from '../../store/gameboard/actions'
import { connect } from 'react-redux'
import AuthModal from '../auth/index'
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

  render() {
    // TODO: Add edit/delete of plans
    return (
      <div>
        <AuthModal />
        <Table columns={this.columns} dataSource={(this.props.tasks || []).map(i => i.task)} />
        <AddButton onClick={addTaskToFirebase} />
      </div>
    )
  }
}

const mapState = state => ({ tasks: state.tasks })

export default connect(mapState)(DataTable)
