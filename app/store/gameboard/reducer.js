import Immutable from 'seamless-immutable'
import * as types from './actionTypes'

const initialState = Immutable({
  playerHistory: []
})

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case types.UPDATE_PLAYER_HISTORY:
    return state.merge({
      playerHistory: [...state.playerHistory, action.payload.playerHistory]
    })
  default:
    return state
  }
}
