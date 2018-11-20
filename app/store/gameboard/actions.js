// import { gameboardService } from "project-services";
import * as types from './actionTypes'
import { createStore, applyMiddleware } from 'redux'
import database from '../../firebase'
import thunkMiddleware from 'redux-thunk'
import Reducer from '../reducers'

export const getTasks = tasks => ({ type: types.GET_TASKS, tasks })
export const addTask = task => ({ type: types.ADD_TASK, task })
export const removeTask = task => ({ type: types.REMOVE_TASK, task })

/**
 * LISTENERS
 */

export const watchTaskAddedEvent = dispatch => {
  database.ref(`/`).on('child_added', snap => {
    dispatch(addTask(snap.val()))
  })
}

export const watchTaskRemovedEvent = dispatch => {
  database.ref(`/`).on('child_removed', snap => {
    dispatch(removeTask(snap.val()))
  })
}

/**
 * THUNKS
 */
export const getTasksThunk = () => dispatch => {
  const tasks = []
  database
    .ref(`/`)
    .once('value', snap => {
      snap.forEach(data => {
        let task = data.val()
        tasks.push(task)
      })
    })
    .then(() => dispatch(getTasks(tasks)))
}

export default createStore(Reducer, applyMiddleware(thunkMiddleware))
