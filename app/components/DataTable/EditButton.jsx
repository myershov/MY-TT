import React, { Component } from 'react'
import AddForm from './AddForm.jsx'
import { selectRow, getTasksThunk } from '../../store/gameboard/actions'
import { connect } from 'react-redux'
class Edit extends Component {
  state = {
    visible: true,
  }
  checkUser = () => {
    if (this.props.users[0] && this.props.users[0].id) {
      let name = localStorage.getItem('myName')
      let buff = this.props.users.find(item => item.id === name)
      return buff
    }
  }
  handleCreate = () => {
    const form = this.formRef.props.form
    form.validateFields((err, values) => {
      if (err) return
      if (values.switch == true) {
        values.dailyPlan = 'End of Day'
        values.TottalyWorked = values.TottalyWorked + ' minutes'
      }

      values.key = this.props.row.key
      values.username = this.props.row.username
      values.date = this.props.row.date

      this.props.onClick(values)
      form.resetFields()

      this.props.dispatch(selectRow(''))
      this.props.dispatch(getTasksThunk())
    })
  }

  // TODO: Recheck and use modern way of refs
  saveFormRef = formRef => {
    this.formRef = formRef
  }

  render() {
    //console.log(this.props.row)
    return (
      <div>
        {this.checkUser() == null && this.props.row.key && (
          <AddForm
            selected={this.props.row}
            wrappedComponentRef={this.saveFormRef}
            onCancel={() => this.props.dispatch(selectRow(''))}
            onCreate={this.handleCreate}
          />
        )}
      </div>
    )
  }
}

const mapState = state => ({
  // debugger
  users: state.Users,
  row: state.selectedRow,
})

export default connect(mapState)(Edit)
