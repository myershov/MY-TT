import tasks from './gameboard/reducer.js'
import Users from './gameboard/userReducer.js'
import { combineReducers } from 'redux'
export default combineReducers({ tasks, Users })
