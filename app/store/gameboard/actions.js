import { gameboardService } from 'project-services'
import * as types from './actionTypes'

export const listenerOnJournalChanges = () => dispatch => {
  dispatch({ type: types.UPDATE_PLAYER_HISTORY, payload: {} })
}
