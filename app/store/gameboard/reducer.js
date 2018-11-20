import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

// const initialState = Immutable({
//   playerHistory: []
// })

// export default (state = initialState, action = {}) => {
//   switch (action.type) {
//   case types.UPDATE_PLAYER_HISTORY:
//     return state.merge({
//       playerHistory: [...state.playerHistory, action.payload.playerHistory]
//     })
//   default:
//     return state
//   }
// }
const initialState = [];

export default function Tasks(state = initialState, action) {
  switch (action.type) {
    case "get tasks":
      return action.tasks;
    case "add task":
      return [...state, action.task];
    case "remove task":
      return state.filter(task => task.id !== action.task.id);
    default:
      return state;
  }
}
