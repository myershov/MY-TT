import React, { Component } from 'react'
import { Table } from 'antd'
import AddButton from './AddButton.jsx'
import {
  //data,
  columns
} from './data.js'
import { addTaskToFirebase, removeTaskFromFirebase } from '../../firebase'
import {
  getTasksThunk,
  watchTaskAddedEvent,
  watchTaskRemovedEvent
} from '../../store/gameboard/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid/v4'
class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //  data
    }
  }

  handleCreate = elem => {
    this.setState(
      {
        data: [
          ...this.state.data,
          {
            key: uuid(),
            ...elem
            // key: this.state.data.length + 1,
            // ...elem
          }
        ]
      },

      () => addTaskToFirebase(this.state.data.slice(-1)[0])
    )
  }

  renderOfTasks = () => {
    if (this.props.tasks[0] && this.props.tasks[0].id) {
      let buff = this.props.tasks.map(item => item.task)
      return buff
    }
  }

  render() {
    // console.log('store', this.props.tasks)
    // console.log('data', this.state.data)
    return (
      <div>
        <Table columns={columns} dataSource={this.renderOfTasks()} />
        <AddButton onClick={this.handleCreate} />
      </div>
    )
  }
}

const mapState = state => ({
  tasks: state.Tasks
})

const mapDispatch = dispatch => {
  dispatch(getTasksThunk())
  watchTaskRemovedEvent(dispatch)
  watchTaskAddedEvent(dispatch)
}

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(DataTable)
)
