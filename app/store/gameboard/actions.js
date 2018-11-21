// import { gameboardService } from "project-services";
import * as types from './actionTypes'
import { createStore, applyMiddleware } from 'redux'
import database from '../../firebase'
import thunkMiddleware from 'redux-thunk'
import Reducer from '../reducers'

export const getTasks = tasks => ({ type: types.GET_TASKS, tasks })
export const addTask = task => ({ type: types.ADD_TASK, task })
export const removeTask = task => ({ type: types.REMOVE_TASK, task })
export const addUser = user => ({ type: types.ADD_USER, user })
export const getUsers = users => ({ type: types.GET_USERS, users })
/**
 * LISTENERS
 */
export function watchUserAddedEvent(dispatch) {
  database.ref(`/USERS/`).on('child_added', snap => {
    dispatch(addUser(snap.val()))
  })
}
export const watchTaskAddedEvent = dispatch => {
  database.ref(`/Tasks/`).on('child_added', snap => {
    dispatch(addTask(snap.val()))
  })
}

export const watchTaskRemovedEvent = dispatch => {
  database.ref(`/Tasks/`).on('child_removed', snap => {
    dispatch(removeTask(snap.val()))
  })
}

/**
 * THUNKS
 */
export const getTasksThunk = () => dispatch => {
  const tasks = []
  database
    .ref(`/Tasks/`)
    .once('value', snap => {
      snap.forEach(data => {
        let task = data.val()
        tasks.push(task)
      })
    })
    .then(() => dispatch(getTasks(tasks)))
}
export function getUsersThunk() {
  return dispatch => {
    const users = []
    database
      .ref(`/USERS/`)
      .once('value', snap => {
        snap.forEach(data => {
          let user = data.val()
          users.push(user)
        })
      })
      .then(() => dispatch(getUsers(users)))
  }
}

export default createStore(Reducer, applyMiddleware(thunkMiddleware))
